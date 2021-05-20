let pecaxadrez = "DAMA".toLowerCase();

switch (pecaxadrez){
    case "peao":
    console.log("O peão deve se mover sempre na vertical, com limite de apenas uma casa por movimento. A única exceção será no movimento inicial, quando ele tem permissão para andar duas casas. É a única peça que não pode voltar e só pode capturar as peças adversárias na diagonal e não na posição em que se movimenta.");
    break;

    case "torre":
    console.log("A torre sempre se movimentará no sentido reto, podendo ser pela vertical ou pela horizontal, perto ou distante. Pode ocupar tanto a casa preta quanto a casa branca.");
    break;

    case "cavalo":
    console.log("O cavalo faz o movimento no formato de um “L”, com direito a andar três casas para conseguir formá-lo. Ou ele anda duas casas na horizontal e uma na vertical ou ele anda duas casas na vertical e uma na horizontal. Assim, essa peça se torna a única que pode pular outras, sem precisar estar na casa de mesma cor");
    break;

    case "bispo":
    console.log("Os bispos podem se movimentar em qualquer uma das casas, perto ou distante, que sejam diagonais a partir do lugar onde eles se encontram. Por isso, eles nunca irão a uma casa de cor diferente das dele. Os brancos sempre se encontrarão nas casas brancas assim como os pretos sempre estarão nas casas pretas.");
    break;

    case "rei":
    console.log("O rei tem os mesmos movimentos da dama; porém, são limitados a apenas uma casa por vez. Pode se movimentar pelas diagonais e também nos sentidos retos, mas pode andar apenas uma casa em cada movimento.");
    break;

    case "dama":
    console.log("Também chamada de rainha, tem os movimentos mais privilegiados do jogo, podendo imitar todas as peças, exceto o cavalo. Ela pode se movimentar tanto nas diagonais quanto nos sentido reto, perto ou distante.A única exceção de imitação é o cavalo. A dama não pode se movimentar como ele, assim como não pode pular outras peças.");
    break;

    default:
    console.log("Peça inválida");
}