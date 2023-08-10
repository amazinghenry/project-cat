const BookCard = () => {
    return ( 
        <div className="book-group">
            <div className="book-item">
                <img className="book-image" src="book.png" alt="book" />
                <h2 className="book-title">Book title: The Dragon Stone</h2>
                <p className="book-aurthor">Aurthur: Henry Adodo </p>
                <p className="book-pub-date">Published Date: 2023 </p>
            </div>
        </div>
     );
}
 
export default BookCard;