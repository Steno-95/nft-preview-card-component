import Footer from "./ui/Footer";

function App() {
  return (
    <main className="min-h-screen flex flex-col justify-center">
      <section className="card">
        <header className="relative overflow-hidden rounded-xl cursor-pointer">
          <img
            src="/images/image-equilibrium.jpg"
            alt="a cube multicolored in a blue room"
            className="size-fit"
          />
          <div className="card-hover flex items-center justify-center">
            <img src="/images/icon-view.svg" alt="icon of a clock" />
          </div>
        </header>
        <article className="card-text">
          <h1 className="text-[1.5rem] font-semibold item-hover">
            Equilibrium #3429
          </h1>
          <p className="tracking-tight">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="flex justify-between">
            <p className="text-(--primary-cyan) font-semibold flex gap-2 items-center py-3">
              <img
                src="/images/icon-ethereum.svg"
                alt="icon of a ethereum, rhomboid shaped icon"
                className="w-3 h-5"
              />
              <span>0.041 ETH</span>
            </p>
            <p className="flex gap-2 items-center">
              <img
                src="/images/icon-clock.svg"
                alt="icon of a open eye"
                className="size-5"
              />
              <span className="font-light"> 3 days left</span>
            </p>
          </div>
        </article>
        <footer className="card-footer">
          <figure className="rounded-full outline-1 outline-(--white)">
            <img
              src="/images/image-avatar.png"
              alt="Jules Wyvern photo"
              className="size-8"
            />
          </figure>
          <p>
            Creation of{" "}
            <span className="text-(--white) item-hover">Jules Wyvern</span>
          </p>
        </footer>
      </section>
      <Footer />
    </main>
  );
}

export default App;
