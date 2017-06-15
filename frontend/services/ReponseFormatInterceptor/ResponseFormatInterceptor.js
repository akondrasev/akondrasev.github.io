const ResponseFormatInterceptor = function ($q) {
    this.response = function(response) {
        return response.data;
    }
};

export default ResponseFormatInterceptor;