// Create a BlogPost class that has
// an authorName
// a title
// a text
// a publicationDate
// Create a few blog post objects:
// "Lorem Ipsum" titled by John Doe posted at "2000.05.04."
// Lorem ipsum dolor sit amet.
// "Wait but why" titled by Tim Urban posted at "2010.10.10."
// A popular long-form, stick-figure-illustrated blog about almost everything.
// "One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
// Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.


class BlogPost {
	authorName: string;
	title: string;
	text: string;
	publicationDate: string;

	constructor(auth: string, titl: string, txt: string, date: string){
		this.authorName = auth;
		this.title = titl;
		this.text = txt;
		this.publicationDate = date;
	}	
}


let blogPost1 = new BlogPost('John Doe', '"Lorem Ipsum"', 'Lorem ipsum dolor sit amet', '2000.05.04.');
let blogPost2 = new BlogPost('Tim Urban', '"Wait but why"', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.');
let blogPost3 = new BlogPost('William Turton', '"One Engineer Is Trying to Get IBM to Reckon With Trump" ', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2017.03.28');
console.log(blogPost1);
console.log(blogPost2);
console.log(blogPost3);