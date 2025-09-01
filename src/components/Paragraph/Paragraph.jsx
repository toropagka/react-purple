import './Paragraph.css'

function Paragraph({fontsize}) {

    return (
        <>
            <p className='paragraph' style={{ fontSize: Number(fontsize)}}>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</p>
        </>
    );
}

export default Paragraph;