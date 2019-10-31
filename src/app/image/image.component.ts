import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})

// Bron: hulp van Mohamad en Patrick
export class ImageComponent {
  data = [];
  srcImage = "";

  // url1=afrika, url2=azie, url
  url1 = `https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-28/sparql?default-graph-uri=&query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+edm%3A+%3Chttp%3A%2F%2Fwww.europeana.eu%2Fschemas%2Fedm%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0APREFIX+hdlh%3A+%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster%3E%0D%0A%0D%0ASELECT+*+WHERE+%7B%0D%0A++++++%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster3%3E+skos%3Anarrower*+%3Fplace+.%0D%0A++++++%3Fplace+skos%3AprefLabel+%3FplaceName+.%0D%0A++%0D%0A+%09VALUES+%3Fcat+%7B+%22Kleding%22+%7D%0D%0A++%09VALUES+%3Ftype+%7B+%22Kleding%22+%7D%0D%0A++%0D%0A++%0D%0A+++++%3Fcho+dct%3Aspatial+%3Fplace+%3B%0D%0A+++++++dc%3Atype+%3Ftype+%3B%0D%0A+++++++++edm%3AisShownBy+%3FimageLink+.%0D%0A%7D%0D%0AGROUP+BY+%3Ftype&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on`
  url2 = `https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-28/sparql?default-graph-uri=&query=PREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+edm%3A+%3Chttp%3A%2F%2Fwww.europeana.eu%2Fschemas%2Fedm%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0APREFIX+hdlh%3A+%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster%3E%0D%0A%0D%0ASELECT+*+WHERE+%7B%0D%0A++++++%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster8401%3E+skos%3Anarrower*+%3Fplace+.%0D%0A++++++%3Fplace+skos%3AprefLabel+%3FplaceName+.%0D%0A++%0D%0A+%09VALUES+%3Fcat+%7B+%22Kleding%22+%7D%0D%0A++%09VALUES+%3Ftype+%7B+%22kleding%22+%7D%0D%0A++%0D%0A++%0D%0A+++++%3Fcho+dct%3Aspatial+%3Fplace+%3B%0D%0A+++++++dc%3Atype+%3Ftype+%3B%0D%0A+++++++++edm%3AisShownBy+%3FimageLink+.%0D%0A%7D%0D%0AGROUP+BY+%3Ftype&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on`
  url3 = 'https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-28/sparql?default-graph-uri=&query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+edm%3A+%3Chttp%3A%2F%2Fwww.europeana.eu%2Fschemas%2Fedm%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0APREFIX+hdlh%3A+%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster%3E%0D%0A%0D%0ASELECT+*+WHERE+%7B%0D%0A++++++%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster6813%3E+skos%3Anarrower*+%3Fplace+.%0D%0A++++++%3Fplace+skos%3AprefLabel+%3FplaceName+.%0D%0A++%0D%0A+%09VALUES+%3Fcat+%7B+%22Kleding%22+%7D%0D%0A++++%09VALUES+%3Ftype+%7B+%22rok%22+%7D%0D%0A%0D%0A%0D%0A++%0D%0A++%0D%0A++%0D%0A+++++%3Fcho+dct%3Aspatial+%3Fplace+%3B%0D%0A+++++++dc%3Atype+%3Ftype+%3B%0D%0A+++++++++edm%3AisShownBy+%3FimageLink+.%0D%0A%7D%0D%0AGROUP+BY+%3Ftype%0D%0A%0D%0A&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on'
  items = []
  afbeeldingLink1 = "";
  afbeeldingLink2 = "";
  afbeeldingLink3 = "";
  check2 = "";
  check3 = "";
  responseData: object [];
  results: object [];
  count: number = 0;
  wrong: "";
  private location: Location
  countGood() {
    this.count++ ;
    console.log(this.count) ;
    if (this.count == 5){
console.log("gefeliciteerd")
    }
    else {
      // naar nieuwe categorie
    }
    }

  constructor(private http: HttpClient) {
      this.http.get(this.url1).subscribe(response1=> {
          const responseData = response1;
          this.data = response1.results.bindings;
          let randomImage = Math.floor(Math.random() * Math.floor(response1.results.bindings.length))
           this.afbeeldingLink1 = this.data[randomImage].imageLink.value;
           console.log(response1)
      });
      this.http.get(this.url2).subscribe(response2=> {
        const responseData = response2;
        this.data = response2.results.bindings;
        let randomImage = Math.floor(Math.random() * Math.floor(response2.results.bindings.length))
         this.afbeeldingLink2 = this.data[randomImage].imageLink.value;
           console.log(response2)
       
    });
    this.http.get(this.url3).subscribe(response3=> {
      const responseData = response3;
      this.data = response3.results.bindings;
      let randomImage = Math.floor(Math.random() * Math.floor(response3.results.bindings.length))
       this.afbeeldingLink3 = this.data[randomImage].imageLink.value;
       console.log(response3)
});



}​



}