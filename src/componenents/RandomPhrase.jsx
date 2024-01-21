const RandomPhrase = ({quote}) => {

    const{ author, phrase } = quote;
    
  return (
    <div className="phrasAuthor">
        <p className="phrase">{phrase}</p>
        <p>Fuente: {author}</p>
    </div>
  )
}
export default RandomPhrase