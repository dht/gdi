import BoardContainer from '../containers/Board.container';
import BoardDetailsPageContainer from '../containers/BoardDetailsPage.container';
import { AccountPageContainer } from './AccountPage/AccountPage.container';
import { ApisPageContainer } from './ApisPage/ApisPage.container';
import { AssetsPageContainer } from './AssetsPage/AssetsPage.container';
import { BoardsPageContainer } from './BoardsPage/BoardsPage.container';
import { BrowsePageContainer } from './BrowsePage/BrowsePage.container';
import { CapabilitiesPageContainer } from './CapabilitiesPage/CapabilitiesPage.container';
import { DataPageContainer } from './DataPage/DataPage.container';
import { DocsPageContainer } from './DocsPage/DocsPage.container';
import { FlowsPageContainer } from './FlowsPage/FlowsPage.container';
import { HistoryPageContainer } from './HistoryPage/HistoryPage.container';
import { LogsPageContainer } from './LogsPage/LogsPage.container';
import { MapPageContainer } from './MapPage/MapPage.container';
import { MobilePage } from './MobilePage/MobilePage';
import { NewBoardPageContainer } from './NewBoardPage/NewBoardPage.container';
import { NewReviewPageContainer } from './NewReviewPage/NewReviewPage.container';
import { PrivacyPolicyPageContainer } from './PrivacyPolicyPage/PrivacyPolicyPage.container';
import { ReportIssuePageContainer } from './ReportIssuePage/ReportIssuePage.container';
import { SettingsPageContainer } from './SettingsPage/SettingsPage.container';
import { TermsOfUsePageContainer } from './TermsOfUsePage/TermsOfUsePage.container';

export const pages = {
  account: AccountPageContainer,
  apis: ApisPageContainer,
  assets: AssetsPageContainer,
  boards: BoardsPageContainer,
  browse: BrowsePageContainer,
  capabilities: CapabilitiesPageContainer,
  data: DataPageContainer,
  settings: SettingsPageContainer,
  docs: DocsPageContainer,
  flows: FlowsPageContainer,
  history: HistoryPageContainer,
  map: MapPageContainer,
  newBoard: NewBoardPageContainer,
  newReview: NewReviewPageContainer,
  mobile: MobilePage,
  reportIssue: ReportIssuePageContainer,
  termsOfUse: TermsOfUsePageContainer,
  privacyPolicy: PrivacyPolicyPageContainer,
  logs: LogsPageContainer,
  details: BoardDetailsPageContainer,
  board: BoardContainer,
};
