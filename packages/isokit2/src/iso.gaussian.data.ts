export const vertexShaderSource = `
  precision mediump float;
  attribute vec2 position;

  attribute vec4 world0;
  attribute vec4 world1;
  attribute vec4 world2;
  attribute vec4 world3;

  uniform mat4 projection, view;
  uniform vec2 focal;
  uniform vec2 viewport;

  varying vec4 vColor;
  varying vec2 vPosition;
  void main () {
    vec3 center = world0.xyz;
    vec4 color = world1;
    vec3 covA = world2.xyz;
    vec3 covB = world3.xyz;

    vec4 camspace = view * vec4(center, 1);
    vec4 pos2d = projection * camspace;// * vec4(camspace.x, -camspace.y, camspace.zw);
    pos2d.y *= -1.;

    float bounds = 1.2 * pos2d.w;
    if (pos2d.z < -pos2d.w || pos2d.x < -bounds || pos2d.x > bounds
		 || pos2d.y < -bounds || pos2d.y > bounds) {
        gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
        return;
    }

    mat3 Vrk = mat3(
        covA.x, covA.y, covA.z, 
        covA.y, covB.x, covB.y,
        covA.z, covB.y, covB.z
    );
	
    mat3 J = mat3(
        focal.x / camspace.z, 0., -(focal.x * camspace.x) / (camspace.z * camspace.z), 
        0., -focal.y / camspace.z, (focal.y * camspace.y) / (camspace.z * camspace.z), 
        0., 0., 0.
    );

    mat3 T = transpose(mat3(view)) * J;
    mat3 cov2d = transpose(T) * Vrk * T;

    float mid = (cov2d[0][0] + cov2d[1][1]) / 2.0;
    float radius = length(vec2((cov2d[0][0] - cov2d[1][1]) / 2.0, cov2d[0][1]));
    float lambda1 = mid + radius, lambda2 = mid - radius;

    if(lambda2 < 0.0) return;
    vec2 diagonalVector = normalize(vec2(cov2d[0][1], lambda1 - cov2d[0][0]));
    vec2 majorAxis = min(sqrt(2.0 * lambda1), 1024.0) * diagonalVector;
    vec2 minorAxis = min(sqrt(2.0 * lambda2), 1024.0) * vec2(diagonalVector.y, -diagonalVector.x);

    vColor = color;
    vPosition = position;
    float scalingFactor = 1.;
    vec2 vCenter = vec2(pos2d) / pos2d.w;
    gl_Position = vec4(
        vCenter 
        + position.x * majorAxis * scalingFactor / viewport 
        + position.y * minorAxis * scalingFactor / viewport, 0.0, 1.0);

  }
`;

export const fragmentShaderSource = `
  precision highp float;
  varying vec4 vColor;
  varying vec2 vPosition;
  void main () {    
	float A = -dot(vPosition, vPosition);
    if (A < -4.0) discard;
    float B = exp(A) * vColor.a;
    gl_FragColor = vec4(B * vColor.rgb, B);
  }
`;
