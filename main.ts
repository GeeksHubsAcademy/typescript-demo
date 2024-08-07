async function main(): Promise<void> {
    while (true) {

        const categories = await getCategories();
        const category = chooseCategory(categories);
        const joke = await getJoke(category);
        printJoke(joke);
        await rateJoke(joke);

        if (!askForAnotherJoke()) {
            break;
        }

    }
}

const BASE_API_URL = 'https://api.jokes.one';
// const BASE_API_URL = 'https://api.chucknorris.io/jokes';

type DataCategories = {
    contents: {
        categories: {
            [key: string]: {
                category: string;
                title: string;
                description: string;
                background: string;
            }
        };
    };
};

async function getCategories(): Promise<string[]> {
    const response = await fetch(`${BASE_API_URL}/jod/categories`);
    console.log(response);

    const data: DataCategories = await response.json();
    console.log(data);

    return Object.keys(data.contents.categories);

}

function chooseCategory(categories: string[]): string {
    return categories[0];
}


async function getJoke(category: string): Promise<string> {
    return '';
}

function printJoke(joke: string): void {
    console.log(joke);
}


async function rateJoke(joke: string): Promise<void> {
    return;
}

function askForAnotherJoke(): boolean {
    return true;
}



main().then(() => console.log('bye bye')).catch(console.error);