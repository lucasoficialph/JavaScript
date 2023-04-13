const gerarPdf = document.querySelector("#gerar-pdf")

gerarPdf.addEventListener("click", () => {
    //conteudo pdf
    const conteudo = document.querySelector("#conteudo")
    //configuração pdf
    const options = {
        margin: [10, 10, 10, 10],
        filename: "arquivo.pdf",
        html2canvas: {scale: 2},
        jspdf: {unit: "mm", format: "a4", orientation: "portrait"}
    }
    //gerar e baixar o pdf
    html2pdf().set(options).from(conteudo).save();
})