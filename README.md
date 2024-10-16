# diyOnicConverter

### implement simple bionic reader

### Usage
- Copy/Paste method implementation to desired website developer console
```
diyOnicConverter(".content");
diyOnicConverter(".content", 4);
```
- Run current POC and use UI to apply bionic reader
```
yarn 
yarn start
```
![local POC](screenshots/local-screenshot.png)


### Parameters

- `textContentContainerSelector (string)`: A CSS selector string that identifies the container element whose text content will be converted.
- `staticPrefix (number, optional)`: The number of characters to bold at the start of each word. Defaults to 3.


### Outline

- Select Container: The function selects the container element using the provided CSS selector.
- Process Text Nodes: It traverses the text nodes within the container, processing each word by bolding the specified number of initial characters.
- Replace Text Nodes: The original text nodes are replaced with new nodes containing the formatted text.
- Error Handling: If the container element is not found using the provided selector, an error message is logged to the console.

### Edge cases
- html entities `&amp;, &lt;` - they will be processed as a part of the text
- documents with deeply nested elements may cause performance issues
- dynamically changed content may be ignored if changed after function is executed
- if static prefix is greater than the length of a word, the entire word will be bolded


## Tested on the following websites


![Wikipedia screenshot](screenshots/wikipedia-screenshot.png)

![Bloomberg screenshot](screenshots/bloomberg-screenshot.png)