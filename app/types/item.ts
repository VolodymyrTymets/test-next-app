export type ItemType = {
  _id: string;
  title: string;
  description: string;
  image: {
    originUrl: string;
    thumbnailUrl: string;
  };
  createdAt: Date;
  createdBy: {
    firstName: string;
    lastName: string;
    email: {
      address: string;
      verified: boolean;
    };
    avatar: {
      originUrl: string;
      thumbnailUrl: string;
    };
  };
};
