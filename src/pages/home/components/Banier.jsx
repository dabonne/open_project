
import student from '../../../assets/carousel/st3.png'
const Banier = () => {


    return <div className="container-fluid bg-body-tertiary1 border-top border-bottom1 mb-4 px-0">
        <div className='container'>
            <div className='row'>
                <div className="col-6 bg-primary1">
                    <div className="py1-5 mb-4 bg-body-tertiary1 rounded-31">
                        <div className="container py-5">
                            <h1 className="display-5 fw-bold">Lorem ipsyum lore</h1>
                            <p className="col-md-11 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                            <button className="btn btn-primary btn-lg" type="button">Voir nos cours</button>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className='d-flex justify-content-center'>
                        <img className='rounded' width={"100%"} src={student} />


                        
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default Banier