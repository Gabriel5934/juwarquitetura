import { createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import bath1 from "../assets/bathroom/img1.webp";
import bath2 from "../assets/bathroom/img2.webp";
import bath3 from "../assets/bathroom/img3.webp";
import bath4 from "../assets/bathroom/img4.webp";
import bath5 from "../assets/bathroom/img5.webp";
import bath6 from "../assets/bathroom/img6.webp";
import bath7 from "../assets/bathroom/img7.webp";
import bath8 from "../assets/bathroom/img8.webp";
import bath9 from "../assets/bathroom/img9.webp";
import bath10 from "../assets/bathroom/img10.webp";
import ktch1 from "../assets/kitchen/img1.webp";
import ktch2 from "../assets/kitchen/img2.webp";
import ktch3 from "../assets/kitchen/img3.webp";
import ktch4 from "../assets/kitchen/img4.webp";
import ktch5 from "../assets/kitchen/img5.webp";
import ktch6 from "../assets/kitchen/img6.webp";
import ktch7 from "../assets/kitchen/img7.webp";
import ktch8 from "../assets/kitchen/img8.webp";
import ktch9 from "../assets/kitchen/img9.webp";
import ktch10 from "../assets/kitchen/img10.webp";
import ktch11 from "../assets/kitchen/img11.webp";
import ktch12 from "../assets/kitchen/img12.webp";
import ktch13 from "../assets/kitchen/img13.webp";
import ktch14 from "../assets/kitchen/img14.webp";
import ktch15 from "../assets/kitchen/img15.webp";
import ktch16 from "../assets/kitchen/img16.webp";
import bed1 from "../assets/bedroom/img1.webp";
import bed2 from "../assets/bedroom/img2.webp";
import bed3 from "../assets/bedroom/img3.webp";
import bed4 from "../assets/bedroom/img4.webp";
import bed5 from "../assets/bedroom/img5.webp";
import lvn1 from "../assets/living/img1.webp";
import lvn2 from "../assets/living/img2.webp";
import lvn3 from "../assets/living/img3.webp";
import lvn4 from "../assets/living/img4.webp";
import lvn5 from "../assets/living/img5.webp";
import lvn6 from "../assets/living/img6.webp";
import Hero from "../assets/hero.webp";
import MiniJu from "../assets/miniJu.webp";
import HappyCouple from "../assets/happyCouple.webp";
import LeadDialog from "../components/lead-dialog";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const DIALOG_CATALOG_ID = "dialog-catalog";
const GRADUATION_YEAR = 2007;

export const Route = createRootRoute({
  component: () => {
    const catalogDialogElement = document.getElementById(
      DIALOG_CATALOG_ID
    ) as HTMLDialogElement;

    const toggleDialogCatalog = () => catalogDialogElement.showModal();

    const years = new Date().getFullYear() - GRADUATION_YEAR;

    const carouselResponsive = {
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024,
        },
        items: 3,
        partialVisibilityGutter: 40,
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0,
        },
        items: 1,
        partialVisibilityGutter: 30,
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464,
        },
        items: 2,
        partialVisibilityGutter: 30,
      },
    };

    return (
      <div
        style={{
          maxWidth: "500px",
        }}
      >
        <LeadDialog
          id={DIALOG_CATALOG_ID}
          title="receba o catálogo"
          subtitle="Juw Arquitetura"
        />
        <div className="bg-green flex justify-between items-center">
          <svg
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Logo_FundoTrnsBeje 1">
              <path
                id="Vector"
                d="M48.1516 57.0338H48.1081L45.5506 51.1765L42.9735 57.0338H42.8685L38.5927 47.2714H39.7328L43.2276 55.2566L45.2777 50.5517L43.833 47.2714H44.9108L48.4056 55.2767L51.4357 48.2968V9.25556C51.4357 9.00213 51.2283 8.79797 50.9749 8.79991C17.92 9.0851 18.5649 40.0381 18.5649 40.0381V60.7451C18.5649 60.9966 18.7691 61.2007 19.0206 61.2007H50.9807C51.2322 61.2007 51.4364 60.9966 51.4364 60.7451V49.536L48.1522 57.0344L48.1516 57.0338ZM23.6756 53.0438C23.9588 52.7573 24.4144 52.7029 24.804 52.8046C25.1935 52.9064 25.4742 53.0101 25.806 53.2389C25.9544 53.0023 26.2208 52.8435 26.4995 52.8254C26.7782 52.8072 27.0634 52.9304 27.241 53.1456C27.4912 53.4482 27.5126 53.8864 27.4115 54.2656C27.1775 55.1444 26.2973 55.8056 25.388 55.7868C24.4786 55.768 23.6276 55.0699 23.4306 54.1819C23.3431 53.7866 23.3904 53.3316 23.6756 53.0438ZM30.4189 51.743C30.4189 55.1827 29.1589 57.1537 26.0782 57.238C23.4299 57.457 21.407 55.9916 20.9747 53.7101L21.4848 53.6135C21.8653 55.6221 23.7067 56.8737 25.887 56.6708C28.1756 56.4427 29.413 54.8204 29.4097 52.4034V40.4846H30.4189V51.743ZM38.2803 57.037H37.4474V55.182C36.7643 56.3928 35.3584 57.2321 33.8158 57.2321C31.8241 57.2321 31.1727 55.8069 31.1727 53.913V47.6065L32.0976 47.1768V54.342C32.0976 55.6111 33.0348 56.5678 34.3622 56.5678C35.6118 56.5678 36.8809 55.7284 37.4468 54.4788V47.2694L38.2796 47.2714V57.037H38.2803Z"
                fill="#F4EFE1"
              />
            </g>
          </svg>
          <a
            href="https://www.instagram.com/juw_arquitetura/"
            target="_blank"
            rel="noopener"
            className="px-4"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="iconmonstr-instagram-11 1" clip-path="url(#clip0_185_74)">
                <path
                  id="Vector"
                  d="M10 1.8025C12.67 1.8025 12.9867 1.8125 14.0417 1.86083C16.7517 1.98417 18.0175 3.27 18.1408 5.96C18.1892 7.01417 18.1983 7.33083 18.1983 10.0008C18.1983 12.6717 18.1883 12.9875 18.1408 14.0417C18.0167 16.7292 16.7542 18.0175 14.0417 18.1408C12.9867 18.1892 12.6717 18.1992 10 18.1992C7.33 18.1992 7.01333 18.1892 5.95917 18.1408C3.2425 18.0167 1.98333 16.725 1.86 14.0408C1.81167 12.9867 1.80167 12.6708 1.80167 10C1.80167 7.33 1.8125 7.01417 1.86 5.95917C1.98417 3.27 3.24667 1.98333 5.95917 1.86C7.01417 1.8125 7.33 1.8025 10 1.8025ZM10 0C7.28417 0 6.94417 0.0116667 5.8775 0.06C2.24583 0.226667 0.2275 2.24167 0.0608333 5.87667C0.0116667 6.94417 0 7.28417 0 10C0 12.7158 0.0116667 13.0567 0.06 14.1233C0.226667 17.755 2.24167 19.7733 5.87667 19.94C6.94417 19.9883 7.28417 20 10 20C12.7158 20 13.0567 19.9883 14.1233 19.94C17.7517 19.7733 19.775 17.7583 19.9392 14.1233C19.9883 13.0567 20 12.7158 20 10C20 7.28417 19.9883 6.94417 19.94 5.8775C19.7767 2.24917 17.7592 0.2275 14.1242 0.0608333C13.0567 0.0116667 12.7158 0 10 0ZM10 4.865C7.16417 4.865 4.865 7.16417 4.865 10C4.865 12.8358 7.16417 15.1358 10 15.1358C12.8358 15.1358 15.135 12.8367 15.135 10C15.135 7.16417 12.8358 4.865 10 4.865ZM10 13.3333C8.15917 13.3333 6.66667 11.8417 6.66667 10C6.66667 8.15917 8.15917 6.66667 10 6.66667C11.8408 6.66667 13.3333 8.15917 13.3333 10C13.3333 11.8417 11.8408 13.3333 10 13.3333ZM15.3383 3.4625C14.675 3.4625 14.1375 4 14.1375 4.6625C14.1375 5.325 14.675 5.8625 15.3383 5.8625C16.0008 5.8625 16.5375 5.325 16.5375 4.6625C16.5375 4 16.0008 3.4625 15.3383 3.4625Z"
                  fill="#F4EFE1"
                />
              </g>
              <defs>
                <clipPath id="clip0_185_74">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <div
          className="flex flex-col justify-center text-center gap-8 bg-darkBase"
          style={{
            height: "350px",
          }}
        >
          <img
            src={Hero}
            alt=""
            className="absolute object-cover w-full rounded-b-3xl z-0"
            style={{
              height: "350px",
              filter: "brightness(0.4)",
              maxWidth: "500px",
            }}
          />
          <div className="flex flex-col">
            <span className="text-white font-medium text-2xl z-10">
              Arquitetura para Todos
            </span>
            <span className="text-white font-light text-lg z-10">
              {years} anos transformando o seu lar
            </span>
          </div>
          <div className="z-10">
            <a
              href="https://wa.me/5512991820133"
              target="_blank"
              rel="noopener"
            >
              <button className="btn btn-primary uppercase">
                fale comigo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <g id="iconmonstr-whatsapp-1 1" clip-path="url(#clip0_92_71)">
                    <path
                      id="Vector"
                      d="M0.547485 20L1.95332 14.8642C1.08582 13.3608 0.629985 11.6567 0.630819 9.90917C0.633319 4.44583 5.07915 0 10.5417 0C13.1925 0.000833333 15.6808 1.03333 17.5525 2.90667C19.4233 4.78 20.4533 7.27 20.4525 9.91833C20.45 15.3825 16.0042 19.8283 10.5417 19.8283C8.88332 19.8275 7.24915 19.4117 5.80165 18.6217L0.547485 20ZM6.04498 16.8275C7.44165 17.6567 8.77498 18.1533 10.5383 18.1542C15.0783 18.1542 18.7767 14.4592 18.7792 9.91667C18.7808 5.365 15.1 1.675 10.545 1.67333C6.00165 1.67333 2.30582 5.36833 2.30415 9.91C2.30332 11.7642 2.84665 13.1525 3.75915 14.605L2.92665 17.645L6.04498 16.8275ZM15.5342 12.2742C15.4725 12.1708 15.3075 12.1092 15.0592 11.985C14.8117 11.8608 13.5942 11.2617 13.3667 11.1792C13.14 11.0967 12.975 11.055 12.8092 11.3033C12.6442 11.5508 12.1692 12.1092 12.025 12.2742C11.8808 12.4392 11.7358 12.46 11.4883 12.3358C11.2408 12.2117 10.4425 11.9508 9.49665 11.1067C8.76082 10.45 8.26332 9.63917 8.11915 9.39083C7.97498 9.14333 8.10415 9.00917 8.22748 8.88583C8.33915 8.775 8.47499 8.59667 8.59915 8.45167C8.72499 8.30833 8.76582 8.205 8.84915 8.03917C8.93165 7.87417 8.89082 7.72917 8.82832 7.605C8.76582 7.48167 8.27082 6.2625 8.06499 5.76667C7.86332 5.28417 7.65915 5.34917 7.50749 5.34167L7.03249 5.33333C6.86749 5.33333 6.59915 5.395 6.37249 5.64333C6.14582 5.89167 5.50582 6.49 5.50582 7.70917C5.50582 8.92833 6.39332 10.1058 6.51665 10.2708C6.64082 10.4358 8.26248 12.9375 10.7467 14.01C11.3375 14.265 11.7992 14.4175 12.1583 14.5317C12.7517 14.72 13.2917 14.6933 13.7183 14.63C14.1942 14.5592 15.1833 14.0308 15.39 13.4525C15.5967 12.8733 15.5967 12.3775 15.5342 12.2742Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_92_71">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </a>
          </div>
        </div>
        <div className="bg-darkBase bg-no-repeat bg-cover flex flex-col p-4 gap-2 relative overflow-clip pb-16 pt-8">
          <div className="flex flex-col">
            <span className="text-xl font-medium">
              Catálogo Juw Arquitetura
            </span>
            <span className="text-base">
              meus projetos para você se inspirar
            </span>
          </div>
          <div>
            <button
              className="btn btn-primary uppercase"
              onClick={toggleDialogCatalog}
            >
              eu quero!
            </button>
          </div>
          <img
            src={MiniJu}
            alt=""
            className="absolute"
            style={{
              right: "8px",
              top: "32px",
              width: "130px",
            }}
          />
        </div>
        <div
          className="bg-darkBase"
          style={{
            maxWidth: "100vw",
            overflowX: "hidden",
          }}
        >
          <div className="text-primary px-8 bg-lightBase rounded-t-3xl flex flex-col pt-8">
            <span className="font-medium text-lg">
              Deixando cada cômodo e ambiente
            </span>
            <span className="font-bold text-2xl underline">do seu jeito</span>
          </div>
          <div className="carouselContainer">
            <span>Banheiros e Lavabos</span>
            <Carousel
              className="carousel w-screen"
              centerMode={true}
              infinite
              responsive={carouselResponsive}
              swipeable
              minimumTouchDrag={0}
            >
              <img alt="" src={bath1} />
              <img alt="" src={bath2} />
              <img alt="" src={bath3} />
              <img alt="" src={bath4} />
              <img alt="" src={bath5} />
              <img alt="" src={bath6} />
              <img alt="" src={bath7} />
              <img alt="" src={bath8} />
              <img alt="" src={bath9} />
              <img alt="" src={bath10} />
            </Carousel>
          </div>
          <div
            style={{
              height: "200px",
            }}
            className="flex flex-col justify-center py-16 bg-cover bg-center gap-2"
          >
            <span className="text-center z-10 text-white font-medium text-lg">
              Falta pouco para você realizar seu sonho
            </span>
            <div className="text-center z-10">
              <a
                href="https://wa.me/5512991820133"
                target="_blank"
                rel="noopener"
              >
                <button className="btn btn-primary uppercase">
                  solicite um orçamento
                </button>
              </a>
            </div>
            <img
              src={HappyCouple}
              alt=""
              className="absolute object-cover w-full z-0"
              style={{
                height: "200px",
                filter: "brightness(0.3)",
                maxWidth: "500px",
              }}
            />
          </div>
          <div className="carouselContainer">
            <span>Cozinhas e Áreas Gourmet</span>
            <Carousel
              className="carousel w-screen"
              centerMode={true}
              infinite
              responsive={carouselResponsive}
              swipeable
              minimumTouchDrag={0}
            >
              <img alt="" src={ktch1} />
              <img alt="" src={ktch2} />
              <img alt="" src={ktch3} />
              <img alt="" src={ktch4} />
              <img alt="" src={ktch5} />
              <img alt="" src={ktch6} />
              <img alt="" src={ktch7} />
              <img alt="" src={ktch8} />
              <img alt="" src={ktch9} />
              <img alt="" src={ktch10} />
              <img alt="" src={ktch11} />
              <img alt="" src={ktch12} />
              <img alt="" src={ktch13} />
              <img alt="" src={ktch14} />
              <img alt="" src={ktch15} />
              <img alt="" src={ktch16} />
            </Carousel>
          </div>
          <div className="bg-blue p-4 flex flex-col gap-2">
            <span className="text-white">Mais inspirações e dicas</span>
            <div>
              <a
                href="https://www.instagram.com/juw_arquitetura/"
                target="_blank"
                rel="noopener"
              >
                <button className="btn btn-primary uppercase">
                  meu insta{" "}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      id="iconmonstr-instagram-11 1"
                      clip-path="url(#clip0_185_74)"
                    >
                      <path
                        id="Vector"
                        d="M10 1.8025C12.67 1.8025 12.9867 1.8125 14.0417 1.86083C16.7517 1.98417 18.0175 3.27 18.1408 5.96C18.1892 7.01417 18.1983 7.33083 18.1983 10.0008C18.1983 12.6717 18.1883 12.9875 18.1408 14.0417C18.0167 16.7292 16.7542 18.0175 14.0417 18.1408C12.9867 18.1892 12.6717 18.1992 10 18.1992C7.33 18.1992 7.01333 18.1892 5.95917 18.1408C3.2425 18.0167 1.98333 16.725 1.86 14.0408C1.81167 12.9867 1.80167 12.6708 1.80167 10C1.80167 7.33 1.8125 7.01417 1.86 5.95917C1.98417 3.27 3.24667 1.98333 5.95917 1.86C7.01417 1.8125 7.33 1.8025 10 1.8025ZM10 0C7.28417 0 6.94417 0.0116667 5.8775 0.06C2.24583 0.226667 0.2275 2.24167 0.0608333 5.87667C0.0116667 6.94417 0 7.28417 0 10C0 12.7158 0.0116667 13.0567 0.06 14.1233C0.226667 17.755 2.24167 19.7733 5.87667 19.94C6.94417 19.9883 7.28417 20 10 20C12.7158 20 13.0567 19.9883 14.1233 19.94C17.7517 19.7733 19.775 17.7583 19.9392 14.1233C19.9883 13.0567 20 12.7158 20 10C20 7.28417 19.9883 6.94417 19.94 5.8775C19.7767 2.24917 17.7592 0.2275 14.1242 0.0608333C13.0567 0.0116667 12.7158 0 10 0ZM10 4.865C7.16417 4.865 4.865 7.16417 4.865 10C4.865 12.8358 7.16417 15.1358 10 15.1358C12.8358 15.1358 15.135 12.8367 15.135 10C15.135 7.16417 12.8358 4.865 10 4.865ZM10 13.3333C8.15917 13.3333 6.66667 11.8417 6.66667 10C6.66667 8.15917 8.15917 6.66667 10 6.66667C11.8408 6.66667 13.3333 8.15917 13.3333 10C13.3333 11.8417 11.8408 13.3333 10 13.3333ZM15.3383 3.4625C14.675 3.4625 14.1375 4 14.1375 4.6625C14.1375 5.325 14.675 5.8625 15.3383 5.8625C16.0008 5.8625 16.5375 5.325 16.5375 4.6625C16.5375 4 16.0008 3.4625 15.3383 3.4625Z"
                        fill="#F4EFE1"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_185_74">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </a>
            </div>
          </div>
          <div className="carouselContainer">
            <span>Quartos e Closets</span>
            <Carousel
              className="carousel w-screen"
              centerMode={true}
              infinite
              responsive={carouselResponsive}
              swipeable
              minimumTouchDrag={0}
            >
              <img alt="" src={bed1} />
              <img alt="" src={bed2} />
              <img alt="" src={bed3} />
              <img alt="" src={bed4} />
              <img alt="" src={bed5} />
            </Carousel>
          </div>
          <div className="carouselContainer">
            <span>Áreas de Convivência</span>
            <Carousel
              className="carousel w-screen"
              centerMode={true}
              infinite
              responsive={carouselResponsive}
              swipeable
              minimumTouchDrag={0}
            >
              <img alt="" src={lvn1} />
              <img alt="" src={lvn2} />
              <img alt="" src={lvn3} />
              <img alt="" src={lvn4} />
              <img alt="" src={lvn5} />
              <img alt="" src={lvn6} />
            </Carousel>
          </div>
        </div>
        <div className="bg-darkBase text-center flex flex-col p-4 gap-4">
          <div className="flex flex-col">
            <span className="font-medium">Entre em contato</span>
            <span>Transforme seu espaço dos sonhos em realidade!</span>
          </div>
          <div>
            <a
              href="https://wa.me/5512991820133"
              target="_blank"
              rel="noopener"
            >
              <button className="btn btn-primary uppercase">
                fale comigo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <g id="iconmonstr-whatsapp-1 1" clip-path="url(#clip0_92_71)">
                    <path
                      id="Vector"
                      d="M0.547485 20L1.95332 14.8642C1.08582 13.3608 0.629985 11.6567 0.630819 9.90917C0.633319 4.44583 5.07915 0 10.5417 0C13.1925 0.000833333 15.6808 1.03333 17.5525 2.90667C19.4233 4.78 20.4533 7.27 20.4525 9.91833C20.45 15.3825 16.0042 19.8283 10.5417 19.8283C8.88332 19.8275 7.24915 19.4117 5.80165 18.6217L0.547485 20ZM6.04498 16.8275C7.44165 17.6567 8.77498 18.1533 10.5383 18.1542C15.0783 18.1542 18.7767 14.4592 18.7792 9.91667C18.7808 5.365 15.1 1.675 10.545 1.67333C6.00165 1.67333 2.30582 5.36833 2.30415 9.91C2.30332 11.7642 2.84665 13.1525 3.75915 14.605L2.92665 17.645L6.04498 16.8275ZM15.5342 12.2742C15.4725 12.1708 15.3075 12.1092 15.0592 11.985C14.8117 11.8608 13.5942 11.2617 13.3667 11.1792C13.14 11.0967 12.975 11.055 12.8092 11.3033C12.6442 11.5508 12.1692 12.1092 12.025 12.2742C11.8808 12.4392 11.7358 12.46 11.4883 12.3358C11.2408 12.2117 10.4425 11.9508 9.49665 11.1067C8.76082 10.45 8.26332 9.63917 8.11915 9.39083C7.97498 9.14333 8.10415 9.00917 8.22748 8.88583C8.33915 8.775 8.47499 8.59667 8.59915 8.45167C8.72499 8.30833 8.76582 8.205 8.84915 8.03917C8.93165 7.87417 8.89082 7.72917 8.82832 7.605C8.76582 7.48167 8.27082 6.2625 8.06499 5.76667C7.86332 5.28417 7.65915 5.34917 7.50749 5.34167L7.03249 5.33333C6.86749 5.33333 6.59915 5.395 6.37249 5.64333C6.14582 5.89167 5.50582 6.49 5.50582 7.70917C5.50582 8.92833 6.39332 10.1058 6.51665 10.2708C6.64082 10.4358 8.26248 12.9375 10.7467 14.01C11.3375 14.265 11.7992 14.4175 12.1583 14.5317C12.7517 14.72 13.2917 14.6933 13.7183 14.63C14.1942 14.5592 15.1833 14.0308 15.39 13.4525C15.5967 12.8733 15.5967 12.3775 15.5342 12.2742Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_92_71">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </a>
          </div>
        </div>
        <div className="bg-green px-4 py-16 flex flex-col gap-8">
          <div className="flex justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <g id="iconmonstr-whatsapp-1 1" clip-path="url(#clip0_92_71)">
                <path
                  id="Vector"
                  d="M0.547485 20L1.95332 14.8642C1.08582 13.3608 0.629985 11.6567 0.630819 9.90917C0.633319 4.44583 5.07915 0 10.5417 0C13.1925 0.000833333 15.6808 1.03333 17.5525 2.90667C19.4233 4.78 20.4533 7.27 20.4525 9.91833C20.45 15.3825 16.0042 19.8283 10.5417 19.8283C8.88332 19.8275 7.24915 19.4117 5.80165 18.6217L0.547485 20ZM6.04498 16.8275C7.44165 17.6567 8.77498 18.1533 10.5383 18.1542C15.0783 18.1542 18.7767 14.4592 18.7792 9.91667C18.7808 5.365 15.1 1.675 10.545 1.67333C6.00165 1.67333 2.30582 5.36833 2.30415 9.91C2.30332 11.7642 2.84665 13.1525 3.75915 14.605L2.92665 17.645L6.04498 16.8275ZM15.5342 12.2742C15.4725 12.1708 15.3075 12.1092 15.0592 11.985C14.8117 11.8608 13.5942 11.2617 13.3667 11.1792C13.14 11.0967 12.975 11.055 12.8092 11.3033C12.6442 11.5508 12.1692 12.1092 12.025 12.2742C11.8808 12.4392 11.7358 12.46 11.4883 12.3358C11.2408 12.2117 10.4425 11.9508 9.49665 11.1067C8.76082 10.45 8.26332 9.63917 8.11915 9.39083C7.97498 9.14333 8.10415 9.00917 8.22748 8.88583C8.33915 8.775 8.47499 8.59667 8.59915 8.45167C8.72499 8.30833 8.76582 8.205 8.84915 8.03917C8.93165 7.87417 8.89082 7.72917 8.82832 7.605C8.76582 7.48167 8.27082 6.2625 8.06499 5.76667C7.86332 5.28417 7.65915 5.34917 7.50749 5.34167L7.03249 5.33333C6.86749 5.33333 6.59915 5.395 6.37249 5.64333C6.14582 5.89167 5.50582 6.49 5.50582 7.70917C5.50582 8.92833 6.39332 10.1058 6.51665 10.2708C6.64082 10.4358 8.26248 12.9375 10.7467 14.01C11.3375 14.265 11.7992 14.4175 12.1583 14.5317C12.7517 14.72 13.2917 14.6933 13.7183 14.63C14.1942 14.5592 15.1833 14.0308 15.39 13.4525C15.5967 12.8733 15.5967 12.3775 15.5342 12.2742Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_92_71">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="iconmonstr-instagram-11 1" clip-path="url(#clip0_185_74)">
                <path
                  id="Vector"
                  d="M10 1.8025C12.67 1.8025 12.9867 1.8125 14.0417 1.86083C16.7517 1.98417 18.0175 3.27 18.1408 5.96C18.1892 7.01417 18.1983 7.33083 18.1983 10.0008C18.1983 12.6717 18.1883 12.9875 18.1408 14.0417C18.0167 16.7292 16.7542 18.0175 14.0417 18.1408C12.9867 18.1892 12.6717 18.1992 10 18.1992C7.33 18.1992 7.01333 18.1892 5.95917 18.1408C3.2425 18.0167 1.98333 16.725 1.86 14.0408C1.81167 12.9867 1.80167 12.6708 1.80167 10C1.80167 7.33 1.8125 7.01417 1.86 5.95917C1.98417 3.27 3.24667 1.98333 5.95917 1.86C7.01417 1.8125 7.33 1.8025 10 1.8025ZM10 0C7.28417 0 6.94417 0.0116667 5.8775 0.06C2.24583 0.226667 0.2275 2.24167 0.0608333 5.87667C0.0116667 6.94417 0 7.28417 0 10C0 12.7158 0.0116667 13.0567 0.06 14.1233C0.226667 17.755 2.24167 19.7733 5.87667 19.94C6.94417 19.9883 7.28417 20 10 20C12.7158 20 13.0567 19.9883 14.1233 19.94C17.7517 19.7733 19.775 17.7583 19.9392 14.1233C19.9883 13.0567 20 12.7158 20 10C20 7.28417 19.9883 6.94417 19.94 5.8775C19.7767 2.24917 17.7592 0.2275 14.1242 0.0608333C13.0567 0.0116667 12.7158 0 10 0ZM10 4.865C7.16417 4.865 4.865 7.16417 4.865 10C4.865 12.8358 7.16417 15.1358 10 15.1358C12.8358 15.1358 15.135 12.8367 15.135 10C15.135 7.16417 12.8358 4.865 10 4.865ZM10 13.3333C8.15917 13.3333 6.66667 11.8417 6.66667 10C6.66667 8.15917 8.15917 6.66667 10 6.66667C11.8408 6.66667 13.3333 8.15917 13.3333 10C13.3333 11.8417 11.8408 13.3333 10 13.3333ZM15.3383 3.4625C14.675 3.4625 14.1375 4 14.1375 4.6625C14.1375 5.325 14.675 5.8625 15.3383 5.8625C16.0008 5.8625 16.5375 5.325 16.5375 4.6625C16.5375 4 16.0008 3.4625 15.3383 3.4625Z"
                  fill="#F4EFE1"
                />
              </g>
              <defs>
                <clipPath id="clip0_185_74">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="text-sm text-white flex flex-col">
            <span>Rua das Pescadas, 75</span>
            <span>Aquarius, São José dos Campos - SP</span>
          </div>
          <a
            className="text-sm underline text-white"
            href="https://www.gnunezandrade.dev/"
            target="_blank"
            rel="noopener"
          >
            Albacore Marketing Digital
          </a>
        </div>
        {(location.hostname === "localhost" ||
          location.hostname === "127.0.0.1") && <TanStackRouterDevtools />}
      </div>
    );
  },
});
