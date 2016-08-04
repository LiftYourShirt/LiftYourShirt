(function(global) {

    const wsAdress = "https://randomuser.me/api/";

    function personGeneratorWSFactory($http, address = wsAddress) {
        return new WSCommunicator(address);
    }

    class WSCommunicator {
        constructor(address) {
            this.address = address;
        }
    }

})(window);