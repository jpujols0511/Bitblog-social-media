let db = {
  users: [
  {
      userId: 'eCjAD2y6tHdIbntg3IHC64dmmz62',
      email: 'work@email.com',
      handle: 'user',
      createdAt: '2019-08-12T00:29:50.964Z',
      imageUrl: 'image/dasdasdas/asdasasas',
      bio: 'Hello my name is user, nice to meet you',
      website: 'https://user.com',
      location: 'New york, USA'
  }
],
  screams: [
    {
      userHandle: 'user',
      body: 'this is the scream body',
      createdAt: "2019-08-10T17:12:57.100Z",
      likeCount: 5,
      commentCount: 2
    }
  ],
  comments: [
    {
      userHandle: 'user',
      screamId: 'l3S7dOLsCqsYscQowdoK',
      body: 'nice one mate!',
      createdAt: '2019-08-10T17:12:57.100Z'
    }
  ]
};
const userDetails = {
  // Redux data
  credentials: {
    userId: 'eCjAD2y6tHdIbntg3IHC64dmmz62',
    email: 'work@email.com',
    handle: 'user',
    createdAt: '2019-08-12T00:29:50.964Z',
    imageUrl: 'image/dasdasdas/asdasasas',
    bio: 'Hello my name is user, nice to meet you',
    website: 'https://user.com',
    location: 'New york, USA'
  },
  likes: [
    {
      userHandle: 'user',
      screamId: 'l3S7dOLsCqsYscQowdoK'
    },
    {
      userHandle: 'user',
      screamId: 'lAJ261NHGdtH6PWEHELa'
    }
  ]
}
