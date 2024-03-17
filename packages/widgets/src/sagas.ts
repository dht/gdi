import { saga as sagaAssets } from './usegdi/starter/asset-list/sagas.AssetsList';
import { saga as sagaBabylon } from './usegdi/starter/babylon/sagas.Babylon';
import { saga as sagaDocEdit } from './usegdi/starter/document/sagas.DocumentEdit';
import { saga as sagaExpressDebugger } from './usegdi/starter/express-debugger/sagas.ExpressDebugger';
import { saga as sagaFlow } from './usegdi/starter/flow/sagas.Flow';
import { saga as sagaFourthWall } from './usegdi/starter/fourth-wall/sagas.FourthWall';
import { saga as sagaMusicList } from './usegdi/starter/music-list/sagas.MusicList';
import { saga as sagaCalendarEvent } from './usegdi/starter/calendar/sagas.Calendar';
import { saga as sagaCalendarEvents } from './usegdi/starter/calendar/sagas.Calendars';
import { saga as sagaContacts } from './usegdi/starter/contacts/sagas.Contacts';
import { saga as sagaContact } from './usegdi/starter/contacts/sagas.Contact';
import { saga as sagaDocument } from './usegdi/starter/documents/sagas.Document';
import { saga as sagaDocuments } from './usegdi/starter/documents/sagas.Documents';
import { saga as sagaExternalEvent } from './usegdi/starter/events/sagas.Event';
import { saga as sagaExternalEvents } from './usegdi/starter/events/sagas.Events';
import { saga as sagaPplGrid } from './usegdi/starter/ppl-grid/sagas.PplGrid';
import { saga as sagaProductTour } from './usegdi/starter/product-tour/sagas.ProductTour';
import { sagas as sagasScene } from './usegdi/starter/scene/sagas';
import { saga as sagaRead } from './usegdi/starter/reads/sagas.Read';
import { saga as sagaReads } from './usegdi/starter/reads/sagas.Reads';
import { saga as sagaReminder } from './usegdi/starter/reminders/sagas.Reminder';
import { saga as sagaReminders } from './usegdi/starter/reminders/sagas.Reminders';
import { saga as sagaListItem } from './usegdi/starter/lists/sagas.ListItem';
import { saga as sagaListItems } from './usegdi/starter/lists/sagas.ListItems';
import { saga as sagaSpeechParams } from './usegdi/starter/speech-params/sagas.SpeechParams';
import { saga as sagaSpeech } from './usegdi/starter/speech/sagas.Speech';
import { saga as sagaTodos } from './usegdi/starter/todos/sagas.Todos';
import { saga as sagaTodo } from './usegdi/starter/todos/sagas.Todo';
import { saga as sagaTranscript } from './usegdi/starter/transcript/sagas.Transcript';
import { saga as sagaTube } from './usegdi/starter/tube/sagas.Tube';
import { saga as sagaVisionSimulator } from './usegdi/starter/vision-simulator/sagas.VisionSimulator';

export const sagas: any = {
  'widgets.assetsList': sagaAssets,
  'widgets.babylon': sagaBabylon,
  'widgets.calendarEvent': sagaCalendarEvent,
  'widgets.calendarEvents': sagaCalendarEvents,
  'widgets.contact': sagaContact,
  'widgets.contacts': sagaContacts,
  'widgets.docEdit': sagaDocEdit,
  'widgets.document': sagaDocument,
  'widgets.documents': sagaDocuments,
  'widgets.externalEvent': sagaExternalEvent,
  'widgets.externalEvents': sagaExternalEvents,
  'widgets.expressDebugger': sagaExpressDebugger,
  'widgets.flow': sagaFlow,
  'widgets.fourthWall': sagaFourthWall,
  'widgets.listItem': sagaListItem,
  'widgets.listItems': sagaListItems,
  'widgets.musicList': sagaMusicList,
  'widgets.pplGrid': sagaPplGrid,
  'widgets.productTour': sagaProductTour,
  'widgets.transcript': sagaTranscript,
  'widgets.reminder': sagaReminder,
  'widgets.reminders': sagaReminders,
  'widgets.speech': sagaSpeech,
  'widgets.read': sagaRead,
  'widgets.reads': sagaReads,
  'widgets.speechParams': sagaSpeechParams,
  'widgets.todo': sagaTodo,
  'widgets.todos': sagaTodos,
  'widgets.tube': sagaTube,
  'widgets.visionSimulator': sagaVisionSimulator,
  ...sagasScene,
};
