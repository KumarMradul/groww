document.addEventListener('DOMContentLoaded', function() {
    let GrowwProduct_stocksDetails = document.querySelector('.GrowwProduct-stocksDetails');
    let GrowwProduct_mutualFundsDetails = document.querySelector('.GrowwProduct-mutualFundsDetails');
    let GrowwProduct_UsStocksDetails = document.querySelector('.GrowwProduct-UsStocksDetails');
    let GrowwProduct_FDsDetails = document.querySelector('.GrowwProduct-FDsDetails');
    let NavbarunderLineActive = document.querySelector('.NavbarunderLineActive');

    // Change Variable
    let ChangeImageAccordingnegivation = document.querySelector('.ChangeImageAccordingnegivation');
    let zeroText = document.querySelector('.zeroText');
    let afterZero = document.querySelector('.afterZero');
    let stocksDetails_Text = document.querySelector('.stocksDetails-Text');

    GrowwProduct_stocksDetails.addEventListener('click', () => {
        NavbarunderLineActive.style.width = '150px';
        NavbarunderLineActive.style.transform = "translate(-760px, 60px)";
        document.querySelector('.StockActive').classList.add('Active1');

        // Remove active classes from other elements
        document.querySelector('.MutualFundsActive').classList.remove('Active2');
        document.querySelector('.UsStocksActive').classList.remove('Active3');
        document.querySelector('.FDActive').classList.remove('Active4');

        // Change content when clicked
        ChangeImageAccordingnegivation.src = "/navigationimage/stocks.png";
        zeroText.textContent = 'Zero';
        afterZero.textContent = 'account charges';
        stocksDetails_Text.textContent ="You don't have to pay a single rupee for opening a stocks account of account maintenance.";
    });

    GrowwProduct_mutualFundsDetails.addEventListener('click', () => {
        NavbarunderLineActive.style.width = '200px';
        NavbarunderLineActive.style.transform = "translate(-585px, 60px)";
        document.querySelector('.MutualFundsActive').classList.add('Active2');

        // Remove active classes from other elements
        document.querySelector('.StockActive').classList.remove('Active1');
        document.querySelector('.UsStocksActive').classList.remove('Active3');
        document.querySelector('.FDActive').classList.remove('Active4');

        // Change content when clicked
        ChangeImageAccordingnegivation.src = "/navigationimage/MutualFunds.png";
        zeroText.textContent = '0%';
        afterZero.textContent = 'commission';
        stocksDetails_Text.textContent = 'Select from 5000+ direct mutual funds and get higher return than regular funds.';
    });

    GrowwProduct_UsStocksDetails.addEventListener('click', () => {
        NavbarunderLineActive.style.width = '150px';
        NavbarunderLineActive.style.transform = "translate(-340px, 60px)";
        document.querySelector('.UsStocksActive').classList.add('Active3');

        // Remove active classes from other elements
        document.querySelector('.StockActive').classList.remove('Active1');
        document.querySelector('.MutualFundsActive').classList.remove('Active2');
        document.querySelector('.FDActive').classList.remove('Active4');

        // Change content when clicked
        ChangeImageAccordingnegivation.src = "/navigationimage/USStock.png";
        zeroText.textContent = 'Free';
        afterZero.textContent = 'account opening';
        stocksDetails_Text.textContent = 'Invest in Apple, Google,Netflix and many mote US companies that you love without any brokerage free.';
    });

    GrowwProduct_FDsDetails.addEventListener('click', () => {
        NavbarunderLineActive.style.width = '100px';
        NavbarunderLineActive.style.transform = "translate(-150px, 60px)";
        document.querySelector('.FDActive').classList.add('Active4');

        // Remove active classes from other elements
        document.querySelector('.StockActive').classList.remove('Active1');
        document.querySelector('.MutualFundsActive').classList.remove('Active2');
        document.querySelector('.UsStocksActive').classList.remove('Active3');

        // Change content when clicked
        ChangeImageAccordingnegivation.src = "/navigationimage/fd.png";
        zeroText.textContent = '6.7%';
        afterZero.textContent = 'intrest rate';
        stocksDetails_Text.textContent = 'Open fixed deposite in any bank with higher intrest rates without opening a bank account.';
    });
});
