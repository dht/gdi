export type PageId = string;

export type Json = Record<string, any>;

export type SpecificContext = {};

export type IContextProviderProps<S extends IContextState, C extends IContextCallbacks> = {
  callbacks: C;
  state?: Partial<S>;
  children: React.ReactNode;
};

export type IContextCallbacks = {
  onAction: (params: ActionParams) => void;
  onItemAction: (params: ItemActionParams) => void;
};

export type IContextState = {
  isReady?: boolean;
} & Json;

export type IContext<S extends IContextState, C extends IContextCallbacks> = {
  state: S;
  callbacks: Partial<C>;
  patchState: (change: Partial<S>) => void;
};

export type Verb = '';

export type ActionParams = {
  verb: string;
  params?: Json;
};

export type ItemActionParams = ActionParams & {
  id: string;
  item: IItem;
};

// =============== Galleries ===============
export type IImage = {
  id: string;
  title: string;
  imageUrl: string;
  imageThumbUrl: string;
  imageDescription?: string;
  imageSource?: string;
  ratio: number;
  tags: string[];
  dataTags: string[];
};

export type IImages = Record<string, IImage>;

export type IArticleStatus = 'draft' | 'published' | 'archived';

export type IItem = IImage & {
  style?: Style;
  top: number;
  bottom: number;
  url: string;
};

export type IArticle = IItem & {
  id: string;
  intro: string;
  name: string;
  authorName: string;
  description: string;
  publishDate: string;
  lastPublishDate: string;
  lastSaveDate: string;
  comments: number;
  slogan: string;
  linkPath: string;
  status: IArticleStatus;
  isPublished: boolean;
  content: string;
  categoryBreadcrumbs: string;
  minutesSpentEditing: number;
  wordCount?: number;
  stats?: IArticleStats;
};

export type IArticleStats = {
  lastUpdated: string;
  totalVotes: number;
  totalAverage: number;
};

export type IEvent = IItem & {
  id: string;
  name: string;
  date?: string;
  location?: string;
  rating?: number;
  description?: string;
  link?: string;
  googleEventId?: string;
};

export type IPerson = IItem & {
  id: string;
  firstName: string;
  lastName: string;
  shortDescription: string;
  dateOfBirth?: string;
  socialTwitterUrl?: string;
  socialFacebookUrl?: string;
  socialInstagramUrl?: string;
  socialLinkedInUrl?: string;
  pinterestUrl?: string;
  wikipediaUrl?: string;
  website?: string;
  phoneNumber?: string;
  images?: string[];
  email?: string;
  notes?: string;
  company?: string;
  jobTitle?: string;
  tier?: number;
  gender?: string;
  category: string;
};

type Style = {
  top: number;
  left: number;
  width: number;
  height: number;
};
