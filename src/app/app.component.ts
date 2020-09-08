import { Component, OnInit } from '@angular/core';

// We declareren hier ChemDoodle, zodat de TypeScript-compiler dit type 'snapt'
declare var ChemDoodle: any;

const MOL_COLOR_H = 'black';
const MOL_COLOR_S = '#B9A130';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /**
   * De ngOnInit is een lifecycle hook van Angular. Een hook is niets anders dan een moment
   * in tijd waarop Angular bepaalde logica uitvoert. De onInit vindt plaats bij het inladen van het component.
   * Eigenlijk is dit hetzelfde als een constructor, maar die wordt binnen Angular eigenlijk niet gebruikt (behalve
   * voor dependency injection, waarmee je bijvoorbeeld een service beschikbaar maakt in een component. De tutorial
   * van Angular legt uit hoe dit werkt: https://angular.io/guide/lifecycle-hooks
   */
  ngOnInit(): void {
    ChemDoodle.ELEMENT['H'].jmolColor = MOL_COLOR_H;
    ChemDoodle.ELEMENT['S'].jmolColor = MOL_COLOR_S;

    // Uitzoektipje: je kunt even kijken welke argumenten 'SketcherCanvas' verwacht. Misschien hoef je niet per se
    // de width en de height op te geven. Het voordeel is dan dat je het 'sketcher' in je .css-bestand kunt stylen
    // met relatieve waardes, zodat je het element fullscreen kunt maken.
    const sketcher = new ChemDoodle.SketcherCanvas('sketcher', 1000, 300,{useServices:true, oneMolecule:true});

    sketcher.styles.atoms_displayTerminalCarbonLabels_2D = true;
    sketcher.styles.atoms_useJMOLColors = true;
    sketcher.styles.bonds_clearOverlaps_2D = true;

    // Met deze repaint zal ChemDoodle vermoedelijk de canvas 'tekenen' op basis van de parameters die je hier hebt ingesteld.
    sketcher.repaint();
  }

}
