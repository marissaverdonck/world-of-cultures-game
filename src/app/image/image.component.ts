import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})

// Bron: hulp van Mohamad en Patrick
export class ImageComponent {
  data = [];
  srcImage = "";
  url = `https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-28/sparql?default-graph-uri=&query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+edm%3A+%3Chttp%3A%2F%2Fwww.europeana.eu%2Fschemas%2Fedm%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0APREFIX+hdlh%3A+%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster%3E%0D%0A%0D%0ASELECT+*+WHERE+%7B%0D%0A++++++%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster7745%3E+skos%3Anarrower*+%3Fplace+.%0D%0A++++++%3Fplace+skos%3AprefLabel+%3FplaceName+.%0D%0A++%0D%0A+%09VALUES+%3Fcat+%7B+%22kleding%22+%7D%0D%0A++%09VALUES+%3Ftype+%7B+%22textiel%22+%7D%0D%0A++%0D%0A++%0D%0A+++++%3Fcho+dct%3Aspatial+%3Fplace+%3B%0D%0A+++++++dc%3Atype+%3Ftype+%3B%0D%0A+++++++++edm%3AisShownBy+%3FimageLink+.%0D%0A%7D%0D%0AGROUP+BY+%3Ftype%0D%0A&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on`
  items = []
  responseData: object [];
  afbeeldingLink = "";

  constructor(private http: HttpClient) {
      this.http.get(this.url).subscribe(response=> {
          const responseData = response;
          this.data = response.results.bindings;
          let randomImage = Math.floor(Math.random() * Math.floor(response.results.bindings.length))
           console.log(this.data[randomImage].imageLink.value);
           this.afbeeldingLink = this.data[randomImage].imageLink.value;
      })
  }
​
}


