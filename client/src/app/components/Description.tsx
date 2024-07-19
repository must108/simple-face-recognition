
export default function Description() {
    return (
        <div className="w-[390px]" data-testid='desc'>
                <h1
                className="font-bold
                text-3xl sm:text-4xl mb-8 text-center"
                >facial detection tool</h1>
                <p className="text-xs sm:text-sm text-center
                pb-3"
                >
                  upload an image and this tool
                  will identify all faces in the 
                  picture. &#40;and will draw
                  a funny box around it&#41;.
                </p>
                <p className="text-xs sm:text-sm text-center
                pb-3">
                  this software is not 100% accurate, 
                  so don&apos;t be surprised if it highlights
                  random things.
                </p>
                <p className="text-xs sm:text-sm text-center
                pb-8">
                  your images are never stored and 
                  can&apos;t be viewed by <br />
                  anyone else!
                </p>
            </div>
    );  
}