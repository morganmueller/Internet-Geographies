# Week 10 Studio
### Working with HTML and CSS

### Introduction
Review Monday's slides if you need a refresher on how to creat an html file!

__Before starting: Create a file called index.html__

1. To start, add the <!DOCTYPE html> declaration as the very first line of code at the top of the index.html file. Add the <html> element below.

2. Below the <html> opening tag, add a <head> element. Below the <head> element, add the <body> element.

3. Within the <head> tags, add a <title> element. Title the website “Whitney Biennial 2022:”.

4. Directly below the opening <body> tag, add an <h1> that says:

“Quiet as It’s Kept”

Below that, add an <h2> that says:

“Apr 6–Sept 5, 2022”


5. Let’s add an info blurb about the Biennial. Between the <h1> and first <h2> tag, add a <p> tag that says:

“The Whitney Biennial has surveyed the landscape of American art, reflecting and shaping the cultural conversation, since 1932. The eightieth edition of the landmark exhibition is co-curated by David Breslin and Adrienne Edwards. Titled Quiet as It’s Kept, the 2022 Biennial features an intergenerational and interdisciplinary group of sixty-three artists and collectives whose dynamic works reflect the challenges, complexities, and possibilities of the American experience today."


6. After the <h2> tags, add another paragraph  using the <p> tag:

“Since the start of the pandemic, time has expanded, contracted, suspended, and blurred—often in dizzying succession. We began planning this Biennial in late 2019: before Covid and its reeling effects, before the uprisings demanding racial justice, before the widespread questioning of institutions and their structures, before the 2020 presidential election. Although underlying conditions are not new, their overlap, their intensity, and their sheer ubiquity created a context in which past, present, and future folded into one another. We organized this Biennial to reflect these precarious and improvised times. Many artists’ contributions are dynamic, taking different forms during the course of the exhibition. Artworks change, walls move, and performances animate the galleries and surrounding objects. The spaces of the Biennial contrast significantly, acknowledging the acute polarity of our society. One floor is a labyrinth, a dark space of containment; another is a clearing, open and light filled.”

7. After the last <h2> tag, add a final paragraph that says:

“Rather than offering a unified theme, we pursue a series of hunches throughout the exhibition: that abstraction demonstrates a tremendous capacity to create, share, and sometimes withhold meaning; that research-driven conceptual art can combine the lushness of ideas and materiality; that personal narratives sifted through political, literary, and pop cultures can address larger social frameworks; that artworks can complicate the meaning of “American” by addressing the country’s physical and psychological boundaries; and that our present moment can be reimagined by engaging with under-recognized artistic models and artists we have lost. Deliberately intergenerational and interdisciplinary, this Biennial proposes that cultural, aesthetic, and political possibility begins with meaningful exchange and reciprocity.”

8. 
Of course, this wouldn’t be a fashion blog without some images. Above each paragraph, add an <img> tag and set its src to be one of the following links:

https://whitneymedia.org/assets/image/827528/large_LITTLEISLAND_GUTPUNCH_Op3_web.jpg
https://whitneymedia.org/assets/image/827466/large_RS10789_Yoon_S_04.jpg
https://whitneymedia.org/assets/image/827510/large_RJ-Jan30-4_Web.jpg

9. The basic website is complete! Now let’s add an image of the Whitney's logo. Below the opening body tag, add an <img> tag with the following source:

https://www.brandingmag.com/wp-content/uploads/2013/06/whitney-museum-new-identity-1.jpg

10. Below the <img> tag, add an <h3> that says “Whitney Museum of American Art”

11. The whitney's site has a lot more than just the Biennial info on it. Let’s make a list of some related posts. Beneath the last paragraph, add a <h4> tag that says “Related Content”. Underneath that header tag, create an unordered list.

12. The unordered list should have the following four items:

“David Hammons: Day’s End”
Jennifer Packer: The Eye Is Not Satisfied With Seeing”
“The Whitney’s Collection: Selections from 1900 to 1965”
“Martine Gutierrez:
Supremacy”

13. Let’s get the page connected to the rest of the web! In the first paragraph, turn ‘Whitney Biennial’ into a link and have it go to: https://en.wikipedia.org/wiki/Whitney_Biennial.

Make sure to include the target="_blank" attribute so that it opens in a new page.

14. A good webpage has a footer. At the bottom of your body, add a new <div> and set its id='contact'. Inside the <div>, create a new <p> tag and put the following contact information inside of it:

email: admin@whitney.org | phone: 917-555-1098 | address: 99 Gansevoort Street, Lower Manhattan, New York City

15. Inside the contact <div>, put <strong> opening and closing tags around “email”, “phone”, and “address”.

16. Let’s make the Whitney's logo  a link to the contact section of the webpage. Find the whitney's <img> tag, and surround it by opening and closing <a> tags. In the <a> tag, set href="#contact".
