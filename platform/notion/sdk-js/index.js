const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

// Database から page を取得
(async function () {
  const response = await notion.databases.query({
    database_id: process.env.DATABASE_ID,
  });
  for (result of response.results) {
    console.log('page_id:', result.id);
    try {
      // page のプロパティを列挙する
      const page = await notion.pages.retrieve({ page_id: result.id });
      console.log('page :', page);

      for (key in page.properties) {
        console.log(key, ':', getText(page.properties[key]));
      }
    } catch(err) {
      console.log(err);
    }
  }
})();

function getText(property) {
  switch (property.type) {
    case 'rich_text':
      return property.rich_text.map(t => t.plain_text).join('');
    case 'title':
      return property.title.map(t => t.plain_text).join('');
    default:
      return null;
  }
}
