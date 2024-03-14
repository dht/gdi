import { saga as sagaAssets } from './usegdi/starter/asset-list/sagas.AssetsList';
import { saga as sagaBabylon } from './usegdi/starter/babylon/sagas.Babylon';
import { saga as sagaDocument } from './usegdi/starter/document/sagas.Document';
import { saga as sagaExpressDebugger } from './usegdi/starter/express-debugger/sagas.ExpressDebugger';
import { saga as sagaFlow } from './usegdi/starter/flow/sagas.Flow';
import { saga as sagaFourthWall } from './usegdi/starter/fourth-wall/sagas.FourthWall';
import { saga as sagaMusicList } from './usegdi/starter/music-list/sagas.MusicList';
import { saga as sagaContacts } from './usegdi/starter/contacts/sagas.Contacts';
import { saga as sagaContact } from './usegdi/starter/contacts/sagas.Contact';
import { saga as sagaPplGrid } from './usegdi/starter/ppl-grid/sagas.PplGrid';
import { saga as sagaProductTour } from './usegdi/starter/product-tour/sagas.ProductTour';
import { sagas as sagasScene } from './usegdi/starter/scene/sagas';
import { saga as sagaSpeechParams } from './usegdi/starter/speech-params/sagas.SpeechParams';
import { saga as sagaSpeech } from './usegdi/starter/speech/sagas.Speech';
import { saga as sagaTranscript } from './usegdi/starter/transcript/sagas.Transcript';
import { saga as sagaTube } from './usegdi/starter/tube/sagas.Tube';
import { saga as sagaVisionSimulator } from './usegdi/starter/vision-simulator/sagas.VisionSimulator';

export const sagas: any = {
  'widgets.assetsList': sagaAssets,
  'widgets.babylon': sagaBabylon,
  'widgets.contact': sagaContact,
  'widgets.contacts': sagaContacts,
  'widgets.document': sagaDocument,
  'widgets.expressDebugger': sagaExpressDebugger,
  'widgets.flow': sagaFlow,
  'widgets.fourthWall': sagaFourthWall,
  'widgets.musicList': sagaMusicList,
  'widgets.pplGrid': sagaPplGrid,
  'widgets.productTour': sagaProductTour,
  'widgets.transcript': sagaTranscript,
  'widgets.speech': sagaSpeech,
  'widgets.speechParams': sagaSpeechParams,
  'widgets.tube': sagaTube,
  'widgets.visionSimulator': sagaVisionSimulator,
  ...sagasScene,
};
