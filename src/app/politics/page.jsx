"use client"

import Header from "../_components/layout/header"
import Image from "next/image"
import Polit from "../../../public/assets/homepage/politics.png"

export default function CGV() {
  return (
    <>
      <Header />
        <main className="bg-dark-color flex flex-col text-black items-center px-10 sm:px-6 pb-20 md:pb-10">
          <h1 className="text-5xl font-semibold py-12 text-center md:text-3xl">Politique de confidentialité</h1>
          <div className="flex flex-col items-center gap-10 w-[75%] md:w-[90%] sm:w-full ">
              <div className="flex flex-col items-start gap-3 w-full">
                <h2 className="text-xl font-bold">ARTICLE 1. DONNÉES PERSONNELLES</h2>
                <p>Pour TEKALP, le respect de la vie privée et des données est fondamental. Ainsi,
                conformément au Règlement Général sur la Protection des Données (ci-après le « RGPD »)
                adopté par le Parlement européen le 14 avril 2016, et à la Loi Informatique et Libertés du 6
                janvier 1978 modifiée (ensemble désigné la « Réglementation »), TEKALP vous informe
                des points suivants :</p>
                <p>Dans le cadre de son site internet tekalp.fr (ci-après le « Site »), des données
                personnelles vous concernant peuvent être collectés. En fournissant ces informations, vous
                acceptez expressément qu’elles soient traitées par TEKALP, aux fins indiquées dans la
                présente politique de confidentialité.</p>
                <p>La présente politique de protection des données a pour but de vous présenter :</p>
                <p>Le responsable de traitement des données à caractère personnel ;</p>
                <p>La manière dont sont collectées et traitées vos données personnelles ;</p>
                <p>Vos droits concernant l’utilisation de vos données personnelles ;</p>
                <p>Les destinataires à qui vos données sont transmises ;</p>
                <p>La politique du Site en matière de gestion des cookies.</p>
              </div>
              <div className="flex flex-col items-start gap-3 w-full">
                <h2 className="text-xl font-bold">IDENTITÉ DU RESPONSABLE DU TRAITEMENT</h2>
                <div className='flex flex-col items-start w-full'>
                    <p>Le responsable du traitement est la société TEKALP, ayant son siège social 371 Rue De
                    Villard Martin, 73110 La Chapelle-Blanche.</p>
                    <p>Adresse mail : contact@tekalp.fr</p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3 w-full">
                  <h2 className="text-xl font-bold">1.2. DONNÉES COLLECTÉES</h2>
                  <p>Conformément au principe de minimisation prévu par la Réglementation, nous ne collectons
                    que les données nécessaires à la réalisation de nos missions.
                    Différentes catégories de données sont susceptibles d’être collectées par TEKALP dans le
                    cadre de son Site. Vous trouverez ci-dessous une liste indicative des données collectées et
                    des informations sur le moment de leur collecte. TEKALP collecte uniquement :</p>
                  <p>Des données d’identité comprenant : nom, prénom, adresse email professionnel,
                    numéro de téléphone professionnel.</p>
                  <p>Des données de requête comprenant : les détails de votre demande, le contenu des
                  échanges avec nos services ainsi que toute données nécessaires au traitement de
                  votre demande.</p>
              </div>
              <div className="flex flex-col items-start gap-3 w-full">
                  <h2 className="text-xl font-bold">1.3. FINALITÉS DU TRAITEMENT</h2>
                  <p>TEKALP est susceptible de traiter vos données personnelles pour les finalités indiquées ci-
                  dessous :</p>
                  <Image src={Polit} alt="Politics table" className='' />
              </div>
              <div className="flex flex-col items-start gap-3 w-full">
                  <h2 className="text-xl font-bold">1.4. DESTINATAIRES DES DONNÉES</h2>
                    <p>Seul TEKALP est destinataire de vos données personnelles.</p>
                    <p>
                      Celles-ci, que ce soit sous forme individuelle ou agrégée, ne sont pas susceptible d’être
                      transmises à des tiers.
                    </p>
                    <p>
                      TEKALP ne procède pas à la commercialisation des données personnelles des visiteurs et
                      utilisateurs de son Site.
                    </p>
              </div>
              <div className="flex flex-col items-start gap-3 w-full">
                  <h2 className="text-xl font-bold">1.5. PROTECTION DES DONNÉES</h2>
                  <p>Conformément à la Réglementation, TEKALP met en œuvre des mesures destinées à
                  protéger vos données personnelles contre les accès, utilisations et divulgations non
                  autorisées.</p>
                  <p>A cette fin TEKALP met notamment en place les mesures suivantes :</p>
                  <p>- Utilisation de mesures techniques afin de s’assurer de la confidentialité et la sécurité
                  des données vous concernant</p>
                  <p>- Restriction de l’accès aux données personnelles vous concernant</p>
                  <p>- Mise en place d’obligations de confidentialité pour les employés de TEKALP ayant
accès aux données personnelles vous concernant</p>
              </div>
              <div className="flex flex-col items-start gap-3 w-full">
                  <h2 className="text-xl font-bold">1.6. DROITS INFORMATIQUE ET LIBERTÉS</h2>
                  <p>En application de la Réglementation, vous disposez des droits suivants concernant vos
données personnelles, que vous pouvez exercer en écrivant à TEKALP aux adresses
mentionnées à l’article 1.1 du présent document.</p>
                  <p>Vous avez la faculté d’accéder aux données personnelles qui ont été collectées par
TEKALP.Cependant, en raison de l’obligation de sécurité et de confidentialité dans le traitement des
données à caractère personnel qui incombe à TEKALP, votre demande sera traitée sous
réserve que vous rapportiez la preuve de votre identité, notamment par la production d’une
copie de votre titre d’identité valide.</p>
                  <p>TEKALP vous informe qu’il sera en droit, le cas échéant, de s’opposer aux demandes
manifestement abusives (de par leur nombre, leur caractère répétitif ou systématique).</p>
                  <p>Le droit à la rectification des données, vous habilite à demander la rectification, la mise à
jour, le verrouillage ou encore l’effacement des données personnelles vous concernant qui
peuvent s’avérer le cas échéant inexactes, erronées, incomplètes ou obsolètes.</p>
                  <p>Egalement, vous pouvez définir des directives générales et particulières relatives au sort des
données à caractère personnel après votre décès. Le cas échéant, les héritiers d’une
personne décédée peuvent exiger de prendre en considération le décès de leur proche et/ou
de procéder aux mises à jour nécessaires.</p>
                  <p>L’exercice de ce droit n’est possible que dans l’une des deux situations suivantes :</p>
                  <p>- Lorsque l’exercice de ce droit est fondé sur des motifs légitimes ; ou</p>
                  <p>- Lorsque l’exercice de ce droit vise à faire obstacle à ce que les données recueillies soient utilisées à des fins de prospection commerciale.</p>
                  <p>TEKALP s’engage à répondre à votre demande d’accès, de rectification ou d’opposition ou
toute autre demande complémentaire d’informations dans un délai raisonnable qui ne saurait
dépasser 1 mois à compter de la réception de votre demande.</p>
              </div>
              <div className="flex flex-col items-start gap-3 w-full">
                  <h2 className="text-xl font-bold">1.7. PLAINTE AUPRÈS DE L’AUTORITÉ COMPÉTENTE</h2>
                  <p>Si vous considérez que TEKALP ne respecte pas ses obligations au regard de vos données
personnelles, vous pouvez adresser une plainte ou une demande auprès de l’autorité
compétente. En France, l’autorité compétente est la CNIL.</p>
            </div>
              <div className="flex flex-col items-start gap-3 w-full">
                  <h2 className="text-xl font-bold">ARTICLE 2. ABSENCE DE COOKIES</h2>
                  <p>La navigation sur le Site ne nécessite l’installation d’aucun cookies sur votre périphérique.</p>
            </div>
          </div>
        </main>
    </>
  )
}