// For this starter code, we use mock data, that is, data in memory that
// is pretty arbitrary. The service functions to create and fetch articles
// will just work on this fake data in memory.

// As we intend the starter code to be extended into an app that uses
// Cloud Firestore, each article is a document whose id is "outside" the
// document data, and each of the service functions are asynchronous.

const articles = {
  1: {
    date: new Date(2021, 2, 16),
    title: "There’s a fair tomorrow",
    body: `
      Is a mháithrín an ligfidh tú chun aonaigh mé
      Is a mhuirnín óg ná healaí é
      Beidh aonach amárach in gContae an Chláir
      Cén mhaith domh é ní bheidh mé ann`
      .trim()
      .replace(/\n */g, "\n"),
  },
  2: {
    date: new Date(2021, 9, 24),
    title: "React is interesting",
    body: "Takes time to learn Firebase, right?",
  },
};

export async function createArticle({ title, body }) {
  articles[Object.keys(articles) + 1] = {
    title,
    body,
    date: new Date(),
  };
}

export async function fetchArticles() {
  return Object.entries(articles).map(([id, data]) => ({ id, ...data }));
}

export async function fetchArticleById(id) {
  return articles[id];
}
