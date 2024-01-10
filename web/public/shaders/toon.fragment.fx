precision highp float;

// Samplers
varying vec2 vUV;
uniform sampler2D textureSampler;

// Parameters
uniform vec2 screenSize;
uniform float outlineThreshold; // Adjust this to control the outline threshold
uniform float highlightThreshold; // Adjust this to control the highlight threshold

float highlights(vec3 color)
{
    return smoothstep(highlightThreshold, 1.0, dot(color, vec3(0.3, 0.59, 0.11)));
}

void main(void)
{
    vec2 texelSize = vec2(1.0 / screenSize.x, 1.0 / screenSize.y);
    vec4 baseColor = texture2D(textureSampler, vUV + vec2(-1.0, -1.0) * texelSize) * 0.25;
    baseColor += texture2D(textureSampler, vUV + vec2(1.0, -1.0) * texelSize) * 0.25;
    baseColor += texture2D(textureSampler, vUV + vec2(1.0, 1.0) * texelSize) * 0.25;
    baseColor += texture2D(textureSampler, vUV + vec2(-1.0, 1.0) * texelSize) * 0.25;

    // Calculate the outline
    vec3 normal = normalize(cross(dFdx(baseColor.rgb), dFdy(baseColor.rgb)));
    float outline = step(outlineThreshold, dot(normal, vec3(0.0, 0.0, 1.0)));

    // Apply the toon-style effect
    vec3 toonColor = floor(baseColor.rgb * 6.0) / 6.0;
    vec3 finalColor = mix(toonColor, baseColor.rgb, outline);

    baseColor.rgb = finalColor;
    baseColor.a = highlights(baseColor.rgb);

    gl_FragColor = baseColor;
}
