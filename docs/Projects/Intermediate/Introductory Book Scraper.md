---
title: "Introductory Book Scraper"
tags: [Intermediate, Projects]
description: "Learn the basics of web scraping with Python by building an introductory book scraper. Discover how to fetch web page content, parse HTML, extract data, and handle errors while scraping the 'Books to Scrape' website."
keywords: [Python web scraping, Beautiful Soup, requests, HTML parsing, data extraction, error handling, ethical scraping, rate limiting, Python project]
---

Welcome to the **Introductory Web Scraper**  project!

In this project we'll explore the power and utility of web scrapers by scraping through [Books to Scrape](https://books.toscrape.com/), a free to use site tailor-made to practice your web scraping skills, to extract the ratings of the books in its Fantasy section. This is a great way to learn about web scraping without worrying about the legality and ethics behind web scraping.

This project is designed for learners at an intermediate level and will focus on applying web scraping techniques using Python. By completing this project, you will gain hands-on experience with web scraping and learn about ethical scraping practices.

## Project Overview: Building our **Introductory Web Scraper**
Let's begin by defining our goals for our **Introductory Web Scraper**-

### Define the Purpose
The **Introductory Web Scraper** aims to demonstrate the power of web scraping with Python by parsing through the Fantasy section of [Books to Scrape](https://books.toscrape.com/) and return all the book titles with a rating of 3 or higher. This project challenges your understanding of HTTP requests, HTML parsing, and data extraction, providing a practical context to apply coding skills in a real-world scenario.

Fetch Page Content: We use the requests module to securely send HTTP requests and retrieve the HTML content of the web page. This step is crucial for gaining access to the raw data that we want to scrape.

### Outline Core Features and Functionality
* Fetch Page Content: Securely request the HTML content of the web page using the ``requests`` library. This process includes implementing error handling to manage scenarios where a request fails due to network issues, server errors, or the requested resource being unavailable. By using try-except blocks, we ensure our scraper can gracefully handle exceptions, maintaining robustness and reliability.

* Process and Filter Data: Use ``Beautifulsoup`` to parse the HTML content and extract information about books, including their titles and ratings. Implement logic to filter out books with ratings below 3, focusing on those with higher user ratings. This feature demonstrates how to navigate and manipulate HTML elements to retrieve specific data points.

### Boundaries and Limitations
* Our **Introductory Web Scraper** focuses on static websites for simplicity to avoid interacting with Javascript to load website content.
* We deliberately exclude the aspects of writing and storing the scraped data to maintain our focus squarely on the scraping technique itself.

## Legal and Ethical Considerations with Web Scraping

Before we dive further into the technical aspects of building our **Introductory Web Scraper**, we need to talk briefly about the legal and ethical considerations that come with web scraping. Understanding these guidelines is critical for keep your web scraping legal and respectful of the source website's rules and limitations.

### Legality of Web Scraping and robots.txt
The legality of web scraping varies by country and can be complex, involving factors like copyright law, terms of service agreements, and data protection regulations. In general, if you're scraping publicly accessible data for personal, non-commercial use, and doing so does not harm the website or violate its terms of service, your activities are more likely to be on solid legal ground.

Most websites have a ``robots.txt`` file that specifies whether web scraping is legal on that site, and which parts of the site can actually be crawled by automated agents like search engine bots and web scrapers.

To find a website's robots.txt file, simply append /robots.txt to the website's base URL (for example, https://example.com/robots.txt). This file provides guidelines on what is allowed and disallowed for scraping, ensuring that your activities are in line with the rules and requirements set by the website.

For this project, we're using [Books to Scrape](https://books.toscrape.com/), a website specifically designed for practicing web scraping techniques. Since it's created for educational purposes, we don't need to worry about the legal and ethical concerns that accompany scraping from other sites, making it an ideal environment to learn and apply web scraping skills.

### Rate Limiting
Even when scraping a site that allows it, like **Books to Scrape**, it's important to implement rate limiting in your scraper, or setting a limit on the requests your scraper makes on the website. This is important because too many requests in a short time period can overload a server, causing it to slow down or even crash, affecting other users. Responsible scrapers pace their requests to avoid such issues, ensuring a positive relationship between the scraper and the source website.


## Transitioning to Code: Structuring the **Introductory Web Scraper**'s Logic
Transitioning from the planning phase to writing code is a pivotal step in any project. In our **Web Scraper** project this involves translating our outlined features and functionalities into a structured plan we can implement in Python. To do this effectively, we need to understand the roles of critical libraries in our code and how they facilitate the process of web scraping.

### Utilizing Python Libraries for Web Scraping
Our web scraper project utilizes two key Python libraries:

* ``requests``: This library is used to make HTTP requests to a web server. It is the first step in web scraping, allowing us to fetch the HTML content of the page we intend to scrape. In our project, ``requests`` is utilized to securely send an HTTP request to the "Fantasy" section of the Books to Scrape website and retrieve the raw HTML content for processing. The requests.get method is straightforward and powerful, capable of handling various HTTP protocols and managing user sessions, and we'll be using that to retrieve and handle our URL.

To explore the full suite of features ``requests`` offers, refer to its official [documentation](https://requests.readthedocs.io/en/latest/)


* ``bs4 (or Beautiful Soup 4)``: After obtaining the HTML content with ``requests``, we use ``BeautifulSoup`` to parse and navigate the HTML structure. ``BeautifulSoup`` provides methods for searching and modifying the parse tree, making it an invaluable tool for extracting the data we need. In our scraper, it's used to find all elements that match the criteria of being a book with a rating of 3 or higher. ``BeautifulSoup`` excels in its ability to deal with HTML content that might be poorly formatted, making it robust and reliable for web scraping tasks.

To explore the full suite of features ``BeautifulSoup`` offers, refer to its official [documentation](https://beautiful-soup-4.readthedocs.io/en/latest/)

Now that we understand the critical role these two libraries play in our **Introductory Web Scraper**, we can move onto how we'll use them.

### Breaking Down the Code Logic:
*  Fetching Web Page Content: Our first logical component involves using ``requests`` to fetch the HTML content of the target webpage. This step includes error handling to manage potential issues like network problems or server errors that could occur during the request.

* Parsing and Extracting Data: Once we have the HTML content, we employ ``BeautifulSoup`` to parse and navigate through it to find the data we're interested in — in this case, book titles and their ratings.

* Filtering and Processing Data: After identifying the relevant data points, we utilize logic to filter out books with ratings below 3. This process not only involves parsing the ratings but also converting them into a numeric format that can be easily compared.

* Error Handling and Robustness: We'll be incorporating error handling throughout the **Introductory Web Scraper** to ensure that it can handle unexpected scenarios, as such connection timeouts and invalid responses.

## Walkthrough
Now that we've gotten an understanding on the **Introductory Web Scraper**'s features and its logical structure, let's get to building it!

Our code breaks each section into its own function, making the code more modular and reusable. Let's go through each of the functions and then see how they all work together to create the **Introductory Web Scraper**:

Let's first install all the libraries we're going to use. If you're on Google Collab you can simply type this into one of your cells and run it.

```python 
pip install requests bs4
```
Otherwise you'll need to use a pip manager on your machine to install the appropriate libraries.

Then let's get all the modules we'll need into our program:
```python
import requests
from bs4 import BeautifulSoup
import time
```

Now with all that out of the way, let's get to the walkthrough.

### Step 1: Fetching Web Page Content
```python

def fetch_page_content(url):
    try:
        response = requests.get(url, timeout=5)
        response.raise_for_status()
        return response.text
    except requests.RequestException as e:
        print(f"Request failed: {e}")
        return None
```

We'll first use the ``get`` method from the ``request`` library to send a GET request to our url, a variable that we'll define in a later section in our code. The timeout parameter ensures that the request doesn't just attempt to get a respond forever and instead waits 5 seconds for a response.

Upon receiving a successful response, the code returns the raw HTML content of the page and enters it into ``response.text`` for further processing.

``response.raise_for_status()`` checks for a successful response. If the response indicates an error (like a 404 Not Found), an exception is raised, printing the error and returning None, successfully ending the program.

### Step 2: Web Scraping with BeautifulSoup
```python
def scrape_data_from_url(url):
    html_content = fetch_page_content(url)
    if not html_content:
        return
    
    soup = BeautifulSoup(html_content, 'html.parser')
    items = soup.find_all('article', class_='product_pod')
    process_item_ratings(items)
```

In this step we'll use BeautifulSoup to parse the HTML content we retrieved with ``fetch_page_content`` by creating a BeautifulSoup object named ``soup``, allowing us to navigate and search through the HTML in a flexible manner.

* Parsing HTML: ``BeautifulSoup(html_content, 'html.parser')`` takes the raw HTML content as input and parses it using Python’s built-in HTML parser. This parsed content becomes a BeautifulSoup object ``soup``, allowing us to perform various searches and data extraction.

* Finding Relevant Data: We then use soup.find_all('article', class_='product_pod') to locate all the ``<article>`` tags with a class of product_pod. Each of these tags represents a single book item on the page. This method returns a list of all matching tags, which we store in items.

This step may be confusing to those unfamiliar with how HTML works. Teaching HTML is beyond the scope of this article, but we can walk you through how we identified that the info we're interested in resides within the ``<article>`` tags with a class of product_pod.

When you open the developer tools (usually accessible by right-clicking on most browsers and selecting inspect) on the target webpage, you can explore its HTML structure. You can further inspect specific parts or element on a browser by right clicking on it and selecting inspect. This will open the specific HTML portion related to that element.

Hovering over sections of the HTML code will also highlight the corresponding element on the website, helping you identify exactly which HTML info corresponds to which element on the website.

In our target website, each book is encapsulated in an ``<article>`` tag, identified by a class name product_pod and appears as- ``<article class="product_pod">``. This consistent structuring allows us to target these tags specifically to extract the data we need.

By identifying this pattern we now know what to search for and can accomplish that with ``soup.find_all('article', class_='product_pod')`` This specificity ensures we're only selecting the elements relevant to our scraping goal.

Now that we've successfully scraped the website, let's move onto processing and extracting our desired info with ``process_item_ratings()``

Lastly, this code includes ``time.sleep(.5)`` at the end of the function to have our function make a request every .5 seconds. This is a small but important part of ethical web scraping practices, ensuring that our function isn't overwhelming the server with rapid-fire requests.

### Step 3: Processing Extracted Items for Ratings
```python
def process_item_ratings(items):
    for item in items:
        title = item.find('h3').find('a')['title']
        rating_class = item.find('p', class_='star-rating')['class'][1]
        rating = convert_to_numeric_rating(rating_class)

        if rating >= 3:
            print(f'Title: {title}\nRating: {rating}\n')
        time.sleep(.5)
```

After we've successfully scraped the HTML content and located the book items using ``soup.find_all``, we move on to process these items.
 The ``process_item_ratings`` function iterates over each item (representing a book) found by BeautifulSoup. For each item, we extract:

* The book title, found within an ``<a>`` tag nested inside an ``<h3>`` tag.
* The rating, indicated by a class attribute within a ``<p>`` tag. We translate this textual class into a numeric rating for easier comparison with the ``convert_to_numeric_rating`` function:

```python
def convert_to_numeric_rating(class_names):
    rating_map = {'One': 1, 'Two': 2, 'Three': 3, 'Four': 4, 'Five': 5}
    return rating_map.get(class_names, 0)
```

We then filter these items based on their ratings, printing only those with a rating of 3 or higher.

Lastly, this code includes ``time.sleep(.5)`` at the end of the function to have our function make a request to the URL server every .5 seconds. This is a small but important part of ethical web scraping practices, ensuring that our function isn't overwhelming the server with rapid-fire requests.

### Bringing It All Together

```python
if __name__ == "__main__":
    target_url = 'https://books.toscrape.com/catalogue/category/books/fantasy_19/index.html'
    scrape_data_from_url(target_url)
```

Finally, we bring all our functions together. The script starts by defining the target URL, which points to the Fantasy section of the "Books to Scrape" website. Then, it calls ``scrape_data_from_url`` with this URL, kicking off the entire process:

* Fetch the page content using ``fetch_page_content``.
* Parse the HTML and extract book items with BeautifulSoup in ``scrape_data_from_url``.
* Process each book item, filtering by rating and printing relevant details in ``process_item_ratings``.

## Conclusion

Congratulations on completing the **Introductory Web Scraper** Project! Through this project you've learned the fundamentals of web scraping using Python, from sending HTTP requests to parsing HTML content and filtering data based on specific criteria. This project has not only reinforced your programming skills but also introduced you to critical aspects of healthy web scraping practices.

This project is just the beginning- the world of web scraping is vast and full of possibilities. As you continue to explore, you'll find that each website presents unique challenges, from dynamic content loaded with JavaScript to complex pagination systems, and each of them will require you to learn and utilize different toolsets from the libraries we used here (``requests`` and ``BeautifulSoup``) to others like ``Selenium`` or ``Scrapy`` for more advanced scraping needs. For now, we encourage you to get familiar with exploring and scraping static websites similar to [Books to Scrape](https://books.toscrape.com/). Start by identifying sites of interest, inspecting their HTML structure, and planning out what data you wish to extract. This explorations will help lay the foundation for understanding how web pages are constructed and how they organize data. Web scrapping will become much more easier once you understand these.

Here are some ideas for what you can also further implement in the Introductory **Web Scraper**, further expanding its capabilities:

* Data Storage and Management: Consider moving beyond simple console prints to storing your scraped data in databases by using formats like CSV or JSON files. This practice will make your data easier to analyze, share, and integrate with other applications. Python's ``pandas`` library can be a powerful tool for data manipulation and storage.
* Advanced Data Processing: As you scrape more complex websites, you may need to handle data in formats like JSON or XML. Libraries such as lxml for XML parsing or json (built into Python) for JSON can be invaluable for processing these data formats.
* Error Handling: Enhance the robustness of your scraper by implementing more sophisticated error handling. This could include retries for failed requests or handling unexpected HTML structure changes.

By exploring these extensions, you can further enhance your programming skills and create a more robust and versatile tool. Remember, the best way to improve your coding abilities is to continue challenging yourself with new projects and problems. Keep experimenting, learning, and building. The possibilities are limitless!

See you in the next project!

## Full Code

```python
import requests
from bs4 import BeautifulSoup
import time

def fetch_page_content(url):
    try:
        response = requests.get(url, timeout=5)
        response.raise_for_status()
        return response.text
    except requests.RequestException as e:
        print(f"Request failed: {e}")
        return None

def process_item_ratings(items):
    for item in items:
        title = item.find('h3').find('a')['title']
        rating_class = item.find('p', class_='star-rating')['class'][1]
        rating = convert_to_numeric_rating(rating_class)

        if rating >= 3:
            print(f'Title: {title}\nRating: {rating}\n')
        time.sleep(.5)

def scrape_data_from_url(url):
    html_content = fetch_page_content(url)
    if not html_content:
        return

    soup = BeautifulSoup(html_content, 'html.parser')
    items = soup.find_all('article', class_='product_pod')
    process_item_ratings(items)

def convert_to_numeric_rating(class_names):
    rating_map = {'One': 1, 'Two': 2, 'Three': 3, 'Four': 4, 'Five': 5}
    return rating_map.get(class_names, 0)

if __name__ == "__main__":
    target_url = 'https://books.toscrape.com/catalogue/category/books/fantasy_19/index.html'
    scrape_data_from_url(target_url)
```