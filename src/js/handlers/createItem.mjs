import { createItem } from '../api/items/create-item.mjs';

export async function setCreateItemListener() {
  const form = document.querySelector('#createItemForm');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const date = form.deadline.value;

      let tagsObject = form.tags.value.split(',', '8');
      let mediaObject = form.media.value.split(',', '8');

      //   console.log(itemData.media);

      const title = form.title.value;
      const description = form.description.value;
      const tags = tagsObject;
      const media = mediaObject;
      const endsAt = date;

      console.log(mediaObject);

      if (mediaObject[0] === '') {
        const itemData = {
          title,
          description,
          tags,
          endsAt,
        };
        console.log(itemData);
        createItem(itemData);
      } else {
        const itemData = {
          title,
          description,
          tags,
          media,
          endsAt,
        };
        console.log(itemData);
        createItem(itemData);
      }
    });
  }
}
