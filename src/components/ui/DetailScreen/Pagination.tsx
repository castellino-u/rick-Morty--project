import { useStorePagination } from "../../../Store/useStorePagination"




export const Pagenation = () => {

    const {page, dec, inc} = useStorePagination()

    
    const minusPage = () =>{
        if(page > 1){
            dec(1)
        }else{
            alert("No hay más páginas")
        }
    }

    const appendPage = () =>{
        if(page < 42){
            inc(1)
        }else{
            alert("No hay más páginas")
        }
    }
    const minusPage3 = () =>{
        if(page > 1){
            dec(3)
        }else{
            alert("No hay más páginas")
        }
    }

    const appendPage3 = () =>{
        if(page < 42){
            inc(3)
        }else{
            alert("No hay más páginas")
        }
    }

    return (


    <div>
        <div className="fixed flex   bottom-19 left-1/2 -translate-x-1/2 text-white " >
            <button className="  w-[40px] bg-gray-800 font-bold text-lg" onClick={minusPage3} > {"<<"} </button>
            <button className=" w-[40px] bg-gray-800 font-bold text-lg" onClick={minusPage} > {"<"} </button>

            <p className="font-bold p-1 ">{page}</p>

            <button className="  w-[40px] bg-gray-800" onClick={appendPage}> {">"} </button>
            <button className="  w-[40px] bg-gray-800" onClick={appendPage3}> {">>"} </button>
        </div>

    </div>
    )
}
