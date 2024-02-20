import fetch from 'node-fetch';
import { config } from 'dotenv';

config();

console.log('process.env.X_TOKEN =>', process.env.X_TOKEN);

// Twitter API v2 endpoint
const endpoint = 'https://api.twitter.com/2';

// Twitter user ID of the account you want to fetch tweets from
const userId = 'OpenAI';

// Bearer token obtained from Twitter Developer Portal
const bearerToken = `${process.env.X_TOKEN}`;

// Parameters for the request
const params = new URLSearchParams({
  max_results: '100', // maximum number of tweets per page
});

// HTTP headers including authorization
const headers = {
  Authorization: `Bearer ${bearerToken}`,
};

// Empty array to store all tweets
const allTweets: any[] = [];

// Function to fetch tweets
async function fetchTweets() {
  let paginationToken: string | undefined;
  do {
    const url = `${endpoint}/users/${userId}/tweets?${params.toString()}`;
    if (paginationToken) {
      params.set('pagination_token', paginationToken);
    }
    const response = await fetch(url, { headers });
    const data = await response.json();

    if ('data' in data) {
      allTweets.push(...data['data']);
    }
    if ('meta' in data && 'next_token' in data['meta']) {
      paginationToken = data['meta']['next_token'];
    } else {
      paginationToken = undefined;
    }
  } while (paginationToken);
}

// Fetch tweets
fetchTweets()
  .then(() => {
    console.log(`Total tweets fetched: ${allTweets.length}`);
  })
  .catch((error) => {
    console.error('Error fetching tweets:', error);
  });
