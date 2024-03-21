import React, { useState, useEffect } from 'react';
import api from './api';

    const SearchEngine = () => {  //Buscador
      
    const [search, setSearch] = useState('');  //recebe o valor digitado no input
    const [cep, setCep] = useState({});   //retorna no html os dados da api


   const handleSearch = async () => {  //função assincrona    
      try{
      const response = await api.get(`${search}`)  //retorna o valor da api
      setCep(response.data)
      console.log(cep)      //exibe o valor do cep no console
      
    }

    catch(error){
      alert('Digite um Cep correto!')
      console.error('Cep incorreto!')
    }
    };
    
    useEffect(() => {
        console.log(search)
    },[])

    // usar uma função async
    //usar um try catch
    //criar uma promise dentro do try
    // const response = await api.get(`${input}/json`)  = promise
    // faz a mudança de estado usando response = setExemplo(response.data) dados do banco

  return (
    <div className='container'>
                  <h1>Buscador de cep</h1>
      <input
        type="text"
        placeholder="Digite seu cep"
        onChange={(e) =>{setSearch(e.target.value) }}            //recebe o valor do input
      />
            <div className='exibir'>
              <span>Cep: {cep.cep}</span>               <br />
              <span>Cidade: {cep.localidade}</span>     <br />
              <span>Estado: {cep.uf}</span>             <br />
              <span>Logradouro: {cep.logradouro}</span> <br />
              <span>Bairro: {cep.bairro}</span>         <br /><br />
                                                        
              <button onClick={() => handleSearch()}>Buscar</button>
            </div>
     <div > 
    </div>
    </div>
  );
};

export default SearchEngine;
