app.get('/v1/sistema-pedidos/teste', cors(), async function(request, response){
    response.status(200)
    response.json(dadosFilme)
})

app.listen(8080, function(){
    console.log('Servidor aguardando novas requisições...')
})