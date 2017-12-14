var lunch = prompt("Cosa vuoi mangiare?", "Scrivi la tua scelta qui");

switch (lunch) {
    case "panino":
        console.log("Ottimo! Un panino, ben farcito.");
        break;
    case "pasta":
        console.log("Perfetto! La pasta è in cottura.");
        break;
    case "insalata":
        console.log("Ne abbiamo di ottime! Vuoi provare una nicoise?");
        break;
    case "torta":
        console.log("Non puoi  mangiare solo dolci!");
        break;
    default:
        console.log("Mi dispiace! Abbiamo terminato " + lunch + ". Preparo un panino?");
}