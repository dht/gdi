import { parseEnvatoItems } from '../../parsing/music';
import { client } from './_init';

export const music = async (term: string) => {
  const response = await client.catalog.searchItems({
    term,
    site: 'audiojungle.net',
    page_size: 20,
    page: 1,
  });

  return parseEnvatoItems(response.matches, { isPurchased: false });
};

export const getPurchases = async () => {
  const response = await client.private.getPurchases({
    include_all_item_details: false,
  });
  return parseEnvatoItems(response.results, { isPurchased: true });
};

export const getDownloadLink = async (id: number) => {
  const response = await client.private.getDownloadLink({ item_id: id });
  return response;
};
