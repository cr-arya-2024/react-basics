import chinespic from './assets/chinees.jpg'
function Card(){
    return(
        <div className="card">
            <img className="card-img" alt="content-picture" src={chinespic}></img>
            <h2>Chinese</h2>
<p>Gobi,Noddles,Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
        </div>
    );
}
export default Card