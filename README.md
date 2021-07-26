# Happy

Happy é um website destinado ao cadastro de orfanatos de uma determinada cidade para possibilitar que interessados consultem os locais disponíveis em sua região para visitação às instituições.
Projeto desenvolvido durante o processo seletivo da empresa júnior Level5 do Instituto de Informática da Universidade Federal de Goiás, a partir dos vídeos da NLW - Next Level Week oferecida pela Rocketseat.

## Linguagens e tecnologias utilizadas

* HTML/HBS
* CSS
* JavaScript
* Node.js
* GitBash
* SQLite

## Conteúdo do website

* Página inicial (index): contém o nome do site, localidade, mensagem e um botão que à segunda página;
* Mapa com orfanatos (orphanages): contém mapa grande contendo pop-ups na localização dos orfanatos já cadastrados, barra lateral com retorno e um botão para adicionar novos orfanatos;
* Página de cadastro de novos orfanatos (create-orphanage): contém campos para o usuário preencher como nome, descrição, número de Whatsapp, link do Facebook, link para imagens, instruções para visita. Os dados são armazenados no banco de dados criado pelo SQLite.
* Página individual do orfanato (orphanage): acessível pelas pop-ups que aparecem na página orphanages. As informações mostradas são aquelas preenchidas na página create-orphanage. Existe um botão para voltar para a página orphanages.
