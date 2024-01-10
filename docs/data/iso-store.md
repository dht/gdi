# The Iso Store

The Iso Store represents an integral part of GDI's extension into 3D technology. This store, managed by the `@gdi/store-iso` package, is specifically dedicated to handling 3D content, reflecting GDI's commitment to exploring the potential of 3D interfaces in human-tech interactions.

## Embracing 3D Technology

GDI's inclusion of 3D technology aligns with its vision to harness advanced AR capabilities, similar to those seen in Apple Vision and Quest 3 AR. Historically, real-time 3D engines were predominantly the domain of gaming, but with AI's evolution, they open doors to innovative and engaging features beyond traditional applications.

## Structure of IIsoStore

The `IIsoStore` is structured to cater to various aspects of 3D scene management:

```typescript
export type IIsoStore = {
  sceneState: ISceneState;
  sceneCurrentIds: ISceneCurrentIds;
  sceneConfig: ISceneConfig;
  sceneCameras: ICameras;
  sceneLights: ILights;
  sceneBits: IBits;
  sceneMeshes: IMeshes;
  scenePacks: IPacks;
  sceneVASPs: IVASPs;
  sceneDots: IDots;
  sceneExternals: IExternals;
  sceneAudios: IAudios;
  sceneEffects: ISceneEffects;
};
```

This structure encompasses elements like scene state, cameras, lights, and other components vital for 3D scene creation and management.

## Widgets and Boards for 3D

GDI offers built-in widgets within the @gdi/widgets-starter package that utilize the Iso Store. Boards like "Scene Builder" and "3D Ad Creator" leverage these widgets, enabling users to build and interact with 3D environments.

## Underlying Technology Stack

At the core of the 3D widgets is the `isokit2` package. This package is built on top of the [Babylon.js](https://www.babylonjs.com/) engine and introduces an additional layer of abstraction. It allows for defining 3D scenes using JSON schemas, facilitating the creation and manipulation of complex 3D environments.

Integration with Asset Library
3D boards often interact with the "assets library" for saving and loading board states. This integration ensures a smooth workflow, where assets can be easily managed and reused across different 3D projects within GDI.
