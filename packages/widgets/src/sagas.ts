import { saga as sagaAssets } from './usegdi/starter/asset-list/sagas.AssetsList';
import { saga as sagaBabylon } from './usegdi/starter/babylon/sagas.Babylon';
import { saga as sagaDocument } from './usegdi/starter/document/sagas.Document';
import { saga as sagaFlow } from './usegdi/starter/flow/sagas.Flow';
import { saga as sagaFourthWall } from './usegdi/starter/fourth-wall/sagas.FourthWall';
import { saga as sagaProductTour } from './usegdi/starter/product-tour/sagas.ProductTour';
import { saga as sagaTranscript } from './usegdi/starter/transcript/sagas.Transcript';
import { saga as sagaSpeech } from './usegdi/starter/speech/sagas.Speech';
import { saga as sagaSpeechParams } from './usegdi/starter/speech-params/sagas.SpeechParams';
import { saga as sagaVisionSimulator } from './usegdi/starter/vision-simulator/sagas.VisionSimulator';
import { sagas as sagasScene } from './usegdi/starter/scene/sagas';

export const sagas: any = {
  'widgets.assetsList': sagaAssets,
  'widgets.babylon': sagaBabylon,
  'widgets.document': sagaDocument,
  'widgets.flow': sagaFlow,
  'widgets.fourthWall': sagaFourthWall,
  'widgets.productTour': sagaProductTour,
  'widgets.transcript': sagaTranscript,
  'widgets.speech': sagaSpeech,
  'widgets.speechParams': sagaSpeechParams,
  'widgets.visionSimulator': sagaVisionSimulator,
  ...sagasScene,
};
