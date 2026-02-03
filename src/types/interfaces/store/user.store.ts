export interface IPeer {
  id: string | any; // socket id
  name: string; // name set after onboarding
  consumers: string[]; // peers' producer ids, consumer for the user
  isMe: boolean;
  joinedAt: Date | null;
}

interface PeerStoreState {
  peers: Map<string, IPeer>;
}

interface PeerStoreActions {
  addPeer: (data: IPeer) => any;
  removePeer: (id: string) => any;
  updatePeer: (data: Partial<IPeer>, id: string) => any;
  removePeerConsumer: (consumerId: string, peerId: string) => any;
  addPeerConsumer: (consumerId: string, peerId: string) => any;
}

type PeerStore = PeerStoreState & PeerStoreActions;

export interface IUserStoreState {
  uuid: string;
  isAuthenticated: boolean;
  username: string;
}

export interface IUserStoreActions {
  login: (data: IUserStoreState) => any;
  logout: () => void;
  update: (data: Partial<IUserStoreState>) => any;
}
