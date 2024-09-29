Pilko Todolist sovellus pienempiin kokonaisuuksiin. Luo uusi komponentti niemeltä TodoTable ja siirrä taulukko sinne. Todotable on nk. stateless komponentti eli sillä ei ole yhtään state:a. Se vain renderöi tehtävät taulukossa.

Sovelluksen komponenttipuun rakenne on seuraava:
App
   |
Todolist (Sisältää painikkeen, input elementit ja state:t)
   |
TodoTable (Sisältää html taulukon)
Huom! Myös funktion voi välittää props:ien avulla komponentipuussa parent komponentilta child komponentille.
