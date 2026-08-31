import { test, expect } from '@playwright/test';

test('API CRUD - POST GET PUT', async ({ request }) => {

    // -----------------------------
    // POST - Create Resource
    // -----------------------------

    const postResponse = await request.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            data: {
                title: 'OrangeHRM API Automation',
                body: 'Created using Playwright API',
                userId: 1
            }
        }
    );

    expect(postResponse.status()).toBe(201);
    const postBody = await postResponse.json();
    console.log('POST Response:', postBody);
    expect(postBody.title).toBe('OrangeHRM API Automation');
    expect(postBody.body).toBe('Created using Playwright API');
    expect(postBody.userId).toBe(1);
    expect(postBody.id).toBeDefined();
    const postId = postBody.id;
    console.log('Created Post ID:', postId);


    // -----------------------------
    // GET - Read Existing Resource
    // -----------------------------

    const getResponse = await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    expect(getResponse.status()).toBe(200);
    const getBody = await getResponse.json();
    console.log('GET Response:', getBody);
    expect(getBody.id).toBe(1);
    expect(getBody.userId).toBeDefined();
    expect(getBody.title).toBeDefined();
    expect(getBody.body).toBeDefined();


    // -----------------------------
    // PUT - Update Existing Resource
    // -----------------------------

    const updateResponse = await request.put(
        'https://jsonplaceholder.typicode.com/posts/1',
        {
            data: {
                id: 1,
                title: 'Updated OrangeHRM API Automation',
                body: 'Updated using Playwright API',
                userId: 1
            }
        }
    );

    expect(updateResponse.status()).toBe(200);
    const updateBody = await updateResponse.json();
    console.log('PUT Response:', updateBody);
    expect(updateBody.id).toBe(1);
    expect(updateBody.title).toBe('Updated OrangeHRM API Automation');
    expect(updateBody.body).toBe('Updated using Playwright API');
    expect(updateBody.userId).toBe(1);

// -----------------------------
// DELETE - Delete Resource
// -----------------------------

const deleteResponse = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
expect(deleteResponse.status()).toBe(200);
const deleteBody = await deleteResponse.json();
console.log('DELETE Response:', deleteBody);


});