import { createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import LeadsBg from "../assets/leadsBg.png";
import kag1 from "../assets/kitchensAndGrills/img1.webp";
import kag2 from "../assets/kitchensAndGrills/img2.webp";
import kag3 from "../assets/kitchensAndGrills/img3.webp";
import kag4 from "../assets/kitchensAndGrills/img4.webp";
import kag5 from "../assets/kitchensAndGrills/img5.webp";
import kag6 from "../assets/kitchensAndGrills/img6.webp";
import kag9 from "../assets/kitchensAndGrills/img9.webp";
import bath1 from "../assets/bathrooms/img1.webp";
import bath2 from "../assets/bathrooms/img2.webp";
import bath3 from "../assets/bathrooms/img3.webp";
import bath4 from "../assets/bathrooms/img4.webp";
import bath5 from "../assets/bathrooms/img5.webp";
import bath6 from "../assets/bathrooms/img6.webp";
import room1 from "../assets/rooms/img1.webp";
import room2 from "../assets/rooms/img2.webp";
import room3 from "../assets/rooms/img3.webp";
import room4 from "../assets/rooms/img4.webp";
import Hero from "../assets/hero.webp";
import LeadDialog from "../components/lead-dialog";

const DIALOG_CATALOG_ID = "dialog-catalog";

export const Route = createRootRoute({
  component: () => {
    const catalogDialogElement = document.getElementById(
      DIALOG_CATALOG_ID
    ) as HTMLDialogElement;

    const toggleDialogCatalog = () => catalogDialogElement.showModal();

    return (
      <>
        <LeadDialog
          id={DIALOG_CATALOG_ID}
          title="receba o catálogo"
          subtitle="Juw Arquitetura"
        />
        <div className="bg-green flex">
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
        </div>
        <div
          className="flex flex-col justify-center text-center gap-4 bg-darkBase"
          style={{
            height: "350px",
          }}
        >
          <img
            src={Hero}
            alt=""
            className="absolute object-cover brightness-50 w-full rounded-b-3xl z-0"
            style={{
              height: "350px",
            }}
          />
          <span className="text-white font-medium text-2xl z-10">
            16 anos cuidando do seu lar
          </span>
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
        <div
          className="bg-darkBase bg-no-repeat bg-cover flex flex-col p-4 gap-2"
          style={{
            backgroundImage: `url(${LeadsBg})`,
          }}
        >
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
        </div>
        <div className="bg-darkBase">
          {/* <div className="p-4 flex flex-col gap-4 bg-lightBase rounded-t-3xl">
          <span className="text-xl font-medium">
            Satisfazendo clientes a 16 anos com:
          </span>
          <div className="flex gap-2 items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="heroicons-solid/eye">
                <g id="Union">
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.32341 11.4467C2.81066 6.97571 7.02791 3.75 12.0005 3.75C16.9708 3.75 21.1864 6.97271 22.6755 11.4405C22.7959 11.8015 22.796 12.1922 22.6759 12.5533C21.1886 17.0243 16.9714 20.25 11.9988 20.25C7.02847 20.25 2.81284 17.0273 1.32374 12.5595C1.2034 12.1985 1.20328 11.8078 1.32341 11.4467ZM17.25 12C17.25 14.8995 14.8995 17.25 12 17.25C9.1005 17.25 6.75 14.8995 6.75 12C6.75 9.1005 9.1005 6.75 12 6.75C14.8995 6.75 17.25 9.1005 17.25 12Z"
                    fill="black"
                  />
                </g>
              </g>
            </svg>
            <div className="flex flex-col">
              <span className="font-medium">Transparência</span>
              <span>Acompanhamento financeiro detalhado</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="heroicons-solid/document-check">
                <g id="Subtract">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 1.5H5.625C4.58947 1.5 3.75 2.33947 3.75 3.375V20.625C3.75 21.6605 4.58947 22.5 5.625 22.5H18.375C19.4105 22.5 20.25 21.6605 20.25 20.625V12.75C20.25 10.6789 18.5711 9 16.5 9H14.625C13.5895 9 12.75 8.16053 12.75 7.125V5.25C12.75 3.17893 11.0711 1.5 9 1.5ZM15.6103 12.4359C15.8511 12.0989 15.773 11.6305 15.4359 11.3897C15.0989 11.1489 14.6305 11.227 14.3897 11.5641L11.1543 16.0936L9.53033 14.4697C9.23744 14.1768 8.76256 14.1768 8.46967 14.4697C8.17678 14.7626 8.17678 15.2374 8.46967 15.5303L10.7197 17.7803C10.8756 17.9362 11.0921 18.0156 11.3119 17.9974C11.5316 17.9793 11.7322 17.8653 11.8603 17.6859L15.6103 12.4359Z"
                    fill="black"
                  />
                  <path
                    d="M12.9712 1.8159C13.768 2.73648 14.25 3.93695 14.25 5.25V7.125C14.25 7.33211 14.4179 7.5 14.625 7.5H16.5C17.8131 7.5 19.0135 7.98204 19.9341 8.77881C19.0462 5.37988 16.3701 2.70377 12.9712 1.8159Z"
                    fill="black"
                  />
                </g>
              </g>
            </svg>
            <div className="flex flex-col">
              <span className="font-medium">Planejamento Eficiente</span>
              <span>Desde o projeto até a entrega da obra</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="heroicons-solid/clock">
                <path
                  id="Subtract"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM12.75 6C12.75 5.58579 12.4142 5.25 12 5.25C11.5858 5.25 11.25 5.58579 11.25 6V12C11.25 12.4142 11.5858 12.75 12 12.75H16.5C16.9142 12.75 17.25 12.4142 17.25 12C17.25 11.5858 16.9142 11.25 16.5 11.25H12.75V6Z"
                  fill="black"
                />
              </g>
            </svg>

            <div className="flex flex-col">
              <span className="font-medium">Compromisso</span>
              <span>Zelando pelos seus prazos</span>
            </div>
          </div>
        </div> */}
          <div className="flex flex-col gap-4 bg-lightBase rounded-t-3xl pt-4">
            <span className="text-xl font-medium text-center">
              Alguns dos meus projetos
            </span>
          </div>
          <div className="p-4 bg-lightBase">
            <span className="text-md">Cozinhas e Churrasqueiras</span>
            <div className="grid grid-cols-3">
              <img alt="" src={kag9} />
              <img alt="" src={kag1} />
              <img alt="" src={kag2} />
            </div>
            <div className="grid grid-cols-2">
              <img alt="" src={kag3} />
              <img alt="" src={kag4} />
            </div>
            <div className="grid grid-cols-2">
              <img alt="" src={kag5} />
              <img alt="" src={kag6} />
            </div>
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
          <div className="p-4 bg-lightBase">
            <span className="text-md">Banheiros</span>
            <div className="grid grid-cols-3">
              <img alt="" src={bath1} />
              <img alt="" src={bath2} />
              <img alt="" src={bath3} />
            </div>
            <div className="grid grid-cols-3">
              <img alt="" src={bath4} />
              <img alt="" src={bath5} />
              <img alt="" src={bath6} />
            </div>
          </div>
          <div className="p-4 bg-lightBase">
            <span className="text-md">Salas de estar e jantar</span>
            <div className="grid grid-cols-2">
              <img alt="" src={room1} />
              <img alt="" src={room4} />
            </div>
            <div className="grid grid-cols-2">
              <img alt="" src={room3} />
              <img alt="" src={room2} />
            </div>
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
      </>
    );
  },
});
