import {Language} from '../models/language';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStore {

  private dataStore: Observable<Language[]> = of([
    {
      id: 1,
      title: 'C#',
      descriptionShort: 'C# ist eine typsichere, objektorientierte Allzweck-Programmiersprache',
      designedBy: 'Microsoft',
      firstAppeared: moment('01-01-2001', 'DD-MM-YYYY').toDate(),
      historyLong:
        'C# greift Konzepte der Programmiersprachen Java, C++, Haskell, C sowie Delphi auf. C# zählt zu den ' +
        'objektorientierten Programmiersprachen und unterstützt sowohl die Entwicklung von sprachunabhängigen .NET-Komponenten ' +
        'als auch COM-Komponenten für den Gebrauch mit Win32-Anwendungsprogrammen. Einige der Elemente von C++, die im Allgemeinen ' +
        'als unsicher gelten, wie beispielsweise Zeiger, werden in C# nur für sogenannten „unsicheren Code“ erlaubt, der in Zonen mit ' +
        'eingeschränkten Rechten (z. B. bei Programmen, die aus Webseiten heraus ausgeführt werden) ohne die Zuteilung erweiterter Rechte' +
        ' nicht ausgeführt wird',
      imageUrl: '../assets/img/lang-img/1.png',
      imageAlt: 'C# Image'
    },
    {
      id: 2,
      title: 'C',
      descriptionShort: 'C ist eine imperative und prozedurale Programmiersprache',
      designedBy: 'Dennis Ritchie',
      firstAppeared: moment('01-01-1972', 'DD-MM-YYYY').toDate(),
      historyLong:
        'C wurde 1969–1973 von Dennis Ritchie[3] in den Bell Laboratories für die Programmierung des damals neuen ' +
        'Unix-Betriebssystems entwickelt. Er stützte sich dabei auf die Programmiersprache B, die Ken Thompson und Dennis Ritchie in den ' +
        'Jahren 1969/70 geschrieben hatten – der Name C entstand als Weiterentwicklung von B. B wiederum geht auf die von ' +
        'Martin Richards Mitte der 1960er-Jahre entwickelte Programmiersprache BCPL zurück.[4] ' +
        'Ritchie schrieb auch den ersten Compiler für C. 1973 war die Sprache so weit ausgereift, dass man nun den ' +
        'Unix-Kernel für die PDP-11 neu in C schreiben konnte',
      imageUrl: '../assets/img/lang-img/2.png',
      imageAlt: 'C# Image'
    },
    {
      id: 3,
      title: 'C++',
      descriptionShort: 'C++ ist eine von der ISO genormte Programmiersprache',
      designedBy: 'Bjarne Stroustrup',
      firstAppeared: moment('01-01-1985', 'DD-MM-YYYY').toDate(),
      historyLong:
        'Die Sprache C++ verwendet nur etwa 60 Schlüsselwörter („Sprachkern“), manche werden in verschiedenen Kontexten ' +
        '(static, default) mehrfach verwendet. Ihre eigentliche Funktionalität erhält sie, ähnlich wie auch die Sprache C, durch die ' +
        'C++-Standardbibliothek, die der Sprache fehlende wichtige Funktionalitäten beibringt (Arrays, Vektoren, Listen, ...) wie ' +
        'auch die Verbindung zum Betriebssystem herstellt (iostream, fopen, exit, ...). Je nach Einsatzgebiet kommen weitere Bibliotheken' +
        'und Frameworks dazu. C++ legt einen Schwerpunkt auf die Sprachmittel zur Entwicklung von Bibliotheken. Dadurch favorisiert ' +
        'es verallgemeinerte Mechanismen für typische Problemstellungen und besitzt kaum in die Sprache integrierte Einzellösungen. ' +
        'Eine der Stärken von C++ ist die Kombinierbarkeit von effizienter, maschinennaher Programmierung mit mächtigen Sprachmitteln, ' +
        'die einfache bis komplexe Implementierungsdetails zusammenfassen und weitgehend hinter abstrakten Befehlsfolgen verbergen. ' +
        'Dabei kommt vor allem die Template-Metaprogrammierung zum Zuge, eine Technik, die eine nahezu kompromisslose Verbindung von ' +
        'Effizienz und Abstraktion erlaubt. Einige Design-Entscheidungen werden allerdings auch häufig kritisiert',
      imageUrl: '../assets/img/lang-img/3.png',
      imageAlt: 'C# Image'
    },
    {
      id: 4,
      title: 'JAVA',
      descriptionShort: 'Java ist eine objektorientierte Programmiersprache und eine eingetragene Marke des Unternehmens Sun Microsystems',
      designedBy: 'James Gosling, Sun Microsystems',
      firstAppeared: moment('01-01-1995', 'DD-MM-YYYY').toDate(),
      historyLong:
        'Der Objektzugriff in Java ist über Referenzen implementiert, die den aus C oder C++ bekannten Zeigern ähneln.[14] ' +
        'Die Sprachdefinition (Java Language Specification) bezeichnet sie als „Reference Values“ um deutlich zu machen, dass sie als ' +
        'Call by value übergeben werden. Aus Sicherheitsgründen erlauben diese weder den Verweis auf Methoden oder andere Referenzen, ' +
        'noch die tatsächliche Speicheradresse zu erkennen oder zu modifizieren. Sogenannte Zeigerarithmetik ist in Java ' +
        'somit ausgeschlossen. Per Design kann so ein häufiger Typ von Fehlern, die in anderen Programmiersprachen auftreten, ' +
        'von vornherein ausgeschlossen werden. Zusammengehörige Klassen werden in Paketen (englisch packages) zusammengefasst. ' +
        'Diese Pakete ermöglichen die Einschränkung der Sichtbarkeit von Klassen, eine Strukturierung von größeren Projekten sowie ' +
        'eine Trennung des Namensraums für verschiedene Entwickler. Die Paketnamen sind hierarchisch aufgebaut und beginnen meist mit ' +
        'dem (umgekehrten) Internet-Domainnamen des Entwicklers, also beispielsweise com.google bei Klassenbibliotheken, die Google zur ' +
        'Verfügung stellt. Klassennamen müssen nur innerhalb eines Paketes eindeutig sein. Hierdurch ist es möglich, Klassen von ' +
        'verschiedenen Entwicklern zu kombinieren, ohne dass es zu Namenskonflikten kommt. Die Hierarchie der Paketnamen hat ' +
        'allerdings keine semantische Bedeutung. Bei der Sichtbarkeit zwischen den Klassen zweier Pakete spielt es keine Rolle, ' +
        'wo sich die Pakete in der Namenshierarchie befinden. Klassen sind entweder nur für Klassen des eigenen Paketes sichtbar ' +
        'oder für alle Pakete',
      imageUrl: '../assets/img/lang-img/4.png',
      imageAlt: 'C# Image'
    },
    {
      id: 5,
      title: 'JAVASCRIPT',
      descriptionShort: 'JavaScript ist eine Skriptsprache, die ursprünglich für dynamisches HTML in Webbrowsern entwickelt wurde',
      designedBy: 'Brendan Eich',
      firstAppeared: moment('01-01-1995', 'DD-MM-YYYY').toDate(),
      historyLong:
        'Am 18. September 1995 veröffentlichte Netscape mit der Vorversion des Navigators 2.0 einen Browser mit einer ' +
        'eingebetteten Skriptsprache, die zu diesem Zeitpunkt LiveScript hieß und von Brendan Eich entwickelt worden war. ' +
        'Die Sprache konnte u. a. Formulareingaben des Benutzers vor dem Absenden überprüfen. Am 4. Dezember 1995 ' +
        'verkündeten Netscape und Sun Microsystems eine Kooperation, die die Interaktion von LiveScript direkt mit ' +
        'Java-Applets zum Ziel hatte. Sun entwickelte die nötigen Java-Klassen, Netscape die Schnittstelle LiveConnect ' +
        'und benannte die Sprache in JavaScript um (JavaScript 1.0).[7][8] JavaScript ist seit der Übernahme von Sun ' +
        'Microsystems eine Marke des Unternehmens Oracle.[9] Mit der ersten Beta-Version des Navigators 3.0 führte Netscape ' +
        'am 29. April 1996 JavaScript 1.1 ein. In selbiger Version gab es die Neuerungen, auf Bilder zugreifen und sogenannte ' +
        'Rollover-Grafiken erstellen zu können. LiveConnect war jetzt fester Bestandteil des Browsers. Mit der Beta-Version ' +
        'des Internet Explorers 3 stellte Microsoft im Mai 1996 seinen ersten JScript-fähigen Browser vor. Dies war der ' +
        'Beginn des Browserkriegs.[10][11] Mit der Ankündigung des Netscape Communicators wurde JavaScript 1.2 am 15. ' +
        'Oktober 1996 veröffentlicht, der Netscape Communicator 4.0 mit JavaScript 1.2 erschien jedoch erst am 4. ' +
        'Juni 1997. Ebenfalls im Juni 1997 veröffentlichte die European Computer Manufacturers Association ihren Standard ' +
        'ECMA-262 (ECMAScript), der zusammen mit Netscape entwickelt worden war und die Grundelemente einer Skriptsprache ' +
        'standardisieren sollte. Diese wurde im April 1998 zur ISO-Norm ISO/IEC 16262:1998 Information technology – ECMAScript' +
        'language specification. Am 1. Oktober 1997 kam der Internet Explorer 4 heraus, der den Sprachumfang von JavaScript ' +
        '1.1 abdeckte. Darüber hinaus wurden eigene Erweiterungen veröffentlicht, die zu Kompatibilitätsunterschieden zwischen ' +
        'Navigator und Internet Explorer führten und eine DOM-ähnliche Syntax zur Verfügung stellten, die es ermöglichte, auf ' +
        'alle Elemente der Webseite zuzugreifen und diese beliebig verändern zu können',
      imageUrl: '../assets/img/lang-img/5.png',
      imageAlt: 'C# Image'
    },
    {
      id: 6,
      title: 'PHP',
      descriptionShort: 'PHP ist eine Skriptsprache mit einer an C und Perl angelehnten Syntax',
      designedBy: 'Rasmus Lerdorf',
      firstAppeared: moment('01-01-1995', 'DD-MM-YYYY').toDate(),
      historyLong:
        'PHP ist ein System, das PHP-Code serverseitig verarbeitet. Das bedeutet, dass der Quelltext nicht an den ' +
        'Webbrowser übermittelt wird, sondern an einen Interpreter auf dem Webserver. Erst die Ausgabe des PHP-Interpreters ' +
        'wird an den Browser geschickt. In den meisten Fällen ist das ein HTML-Dokument, wobei es mit PHP aber auch möglich ist, ' +
        'andere Dateitypen, wie Bilder oder PDF-Dateien, zu generieren. Um eine PHP-Datei im Rahmen einer Webanwendung ausführen ' +
        'zu können, benötigt man ein System, das mit den in der Datei enthaltenen Anweisungen umgehen kann. Aus diesem Grund wird ' +
        'durch eine Schnittstelle, wie ISAPI oder CGI, der Interpreter von einem Server-Daemon oder Server-Dienst, wie Apache oder IIS, ' +
        'ausgeführt. Die Kombination von Linux/Windows/macOS als Betriebssystem, Apache als Webserver, MySQL als Datenbanksystem und ' +
        'PHP wird LAMP (für Linux), WAMP (für Windows) oder MAMP (für Mac OS X) genannt. Fertige LAMP-, MAMP- und WAMP-Pakete, die ' +
        'das einzelne Laden und Konfigurieren von Paketen aus dem Internet unnötig machen, werden etwa im Projekt XAMPP entwickelt. ' +
        'Hier gibt es Versionen für Linux, Solaris, Windows und Mac OS X, die jedoch nur für Test- und Entwicklungsumgebungen genutzt ' +
        'werden sollen.[29] Da PHP normalerweise in einer Webserver-Umgebung läuft, unterliegt es auch dem zustandslosen HTTP. ' +
        'Jede PHP-Seite belastet den Webserver durch den Interpreter, zudem arbeitet der Interpreter den Quelltext bei jedem ' +
        'Aufruf erneut ab',
      imageUrl: '../assets/img/lang-img/6.png',
      imageAlt: 'C# Image'
    },
    {
      id: 7,
      title: 'SWIFT',
      descriptionShort: 'Swift ist eine Programmiersprache von Apple für iOS, macOS, tvOS, ' +
        'watchOS und Linux, die auf der Entwicklerkonferenz WWDC 2014 vorgestellt wurde',
      designedBy: 'Chris Lattner',
      firstAppeared: moment('01-01-2014', 'DD-MM-YYYY').toDate(),
      historyLong:
        'Swift ist eine Programmiersprache von Apple für iOS, macOS, tvOS, watchOS und Linux, die auf der Entwicklerkonferenz ' +
        'WWDC 2014 vorgestellt wurde. Es handelt sich dabei um eine multiparadigmatische Sprache, die Ideen von Objective-C, Rust, ' +
        'Haskell, Ruby, Python, C#, CLU, D[2] und anderen Programmiersprachen aufgreift.[1] Sie bietet Mechanismen wie Klassen, ' +
        'Vererbung, Closures, Typinferenz, Funktionen höherer Ordnung, generische Typen und Namensräume sowie multiple Rückgabetypen ' +
        'und -werte.[3] Der Compiler basiert auf LLVM.[4] Auf der Konferenz wurde das dazugehörige Handbuch angekündigt und im ' +
        'iBooks Store zur Verfügung gestellt.[5] Laut Swifts Chefarchitekten, Chris Lattner,[1] soll Swift Objective-C bei Apple ' +
        'nicht ersetzen, sondern eine zusätzliche Möglichkeit zum Entwickeln für die Plattformen iOS und macOS bieten.[6] ' +
        'Die neuste Version von Swift ist 4.2, welche am 17. September 2018 veröffentlicht wurde',
      imageUrl: '../assets/img/lang-img/7.png',
      imageAlt: 'C# Image'
    },
    {
      id: 8,
      title: 'GROOVY',
      descriptionShort: 'Groovy ist eine Programmiersprache und Skriptsprache, die dynamische und statische Typisierung unterstützt',
      designedBy: 'James Strachan',
      firstAppeared: moment('01-01-2003', 'DD-MM-YYYY').toDate(),
      historyLong:
        'Groovy ist eine Programmiersprache und Skriptsprache, die dynamische und statische Typisierung unterstützt. ' +
        'Sie zählt zu den Sprachen, die auf der Java Virtual Machine ausgeführt werden, was eine Verfügbarkeit für viele Plattformen ' +
        'wie insbesondere Linux, Mac OS X und Windows ermöglicht. Das Design-Ziel des ursprünglichen Entwicklers James Strachan ' +
        'bestand darin, eine „geschliffene“ Fassung der Java-Syntax mit den Konzepten von Ruby zu verbinden. Groovy besitzt ' +
        'einige Fähigkeiten, die in Java nicht vorhanden sind: Native Syntax für Maps, Listen und Reguläre Ausdrücke, ' +
        'ein einfaches Templatesystem, mit dem HTML- und SQL-Code erzeugt werden kann, eine XQuery-ähnliche Syntax zum Ablaufen ' +
        'von Objektbäumen, Operatorüberladung und eine native Darstellung für BigDecimal und BigInteger. Groovy wird nicht wie ' +
        'andere Skriptsprachen über einen interpretierten Abstract Syntax Tree ausgeführt, sondern vor dem Ablauf eines Skripts ' +
        'direkt in Java-Bytecode übersetzt.[2] Syntaktisch ist Groovy viel weiter von Java entfernt als BeanShell, dafür aber ' +
        'viel näher zu Ruby und Python. Groovy wird aufgrund der einfachen Handhabung von BigDecimal unter anderem im ' +
        'Finanzbereich eingesetzt. Groovy gilt als besser integriert als die meisten anderen Skriptsprachen auf der JVM. ' +
        'Dies ermöglicht eine einfache Nutzung bestehender Bibliotheken oder die Nutzung von Groovy-Objekten und -Klassen in Java',
      imageUrl: '../assets/img/lang-img/8.png',
      imageAlt: 'C# Image'
    },
    {
      id: 9,
      title: 'RUBY',
      descriptionShort: 'Ruby ist eine höhere Programmiersprache, die Mitte der 1990er Jahre ' +
        'vom Japaner Yukihiro Matsumoto entworfen wurde',
      designedBy: 'Yukihiro Matsumoto',
      firstAppeared: moment('01-01-1995', 'DD-MM-YYYY').toDate(),
      historyLong:
        'Yukihiro „Matz“ Matsumoto begann 1993 an einer eigenen Sprache zu arbeiten und gab am 21. Dezember 1995 die erste ' +
        'Version von Ruby, 0.95, frei. Den Namen, hergeleitet vom Edelstein Rubin, wählte er als Anspielung auf die Programmiersprache ' +
        'Perl.[5] Matsumotos Ziel bei der Erschaffung der neuen Sprache war eine Synthese aus Elementen der von ihm geschätzten ' +
        'Programmiersprachen Perl, Smalltalk, Eiffel, Ada und Lisp zu bilden und funktionale und imperative Programmierparadigmen in ' +
        'Einklang zu bringen. Darüber hinaus sollte die Sprache objektorientierter als Python und zugleich mächtiger als Perl sein. ' +
        'Auch Flexibilität, Ausdrucksstärke und Einfachheit spielten bereits eine gewichtige Rolle.' +
        'In Japan erlangte Ruby nach Erscheinen rasch an Bekanntheit. Im Westen verhalfen der Programmiersprache das Buch Programming ' +
        'Ruby (2000) (bekannt als Pickaxe book als Anspielung auf die Illustration auf dem Buchdeckel) und das Webframework Ruby ' +
        'on Rails (2004) zum Durchbruch. In den folgenden Jahren mehrte sich auch die englisch- und deutschsprachige Dokumentation ' +
        'sowie Literatur. Die Verkehrssprache der Kern-Entwickler wechselte von Japanisch zu Englisch. Heute wird die Sprache als ' +
        'Open-Source-Projekt weitergepflegt und ist Gegenstand diverser Publikationen und Kurse. Veröffentlichungen mit neuen ' +
        'Funktionen geschehen üblicherweise im Jahresrhythmus zur Weihnachtszeit',
      imageUrl: '../assets/img/lang-img/9.png',
      imageAlt: 'C# Image'
    },
    {
      id: 10,
      title: 'VBA',
      descriptionShort: 'Visual Basic for Applications (VBA) ist eine Skriptsprache, die ursprünglich für die Steuerung von Abläufen ' +
        'der Microsoft-Office-Programmfamilie entwickelt wurde',
      designedBy: 'Microsoft',
      firstAppeared: moment('01-01-1993', 'DD-MM-YYYY').toDate(),
      historyLong:
        'VBA gilt als leistungsfähige Skriptsprache und ist die am weitesten verbreitete Möglichkeit, auf ' +
        'Microsoft-Office-Anwendungen (Excel, Word, Access etc.) basierende Programme zu erstellen. VBA ist eine interpretierte ' +
        'Programmiersprache, deren Syntax der von Visual Basic (sowohl Visual Basic Classic als auch Visual Basic .NET) entspricht. ' +
        'Die Möglichkeiten und die Leistungsfähigkeit von VBA sind allerdings gegenüber Visual Basic deutlich reduziert. ' +
        'Beispielsweise wird ein VBA-Skript zwar vorkompiliert, um Variablen- und Konstantentabellen aufzubauen und syntaktische ' +
        'Überprüfungen durchzuführen, ein Kompilieren bis hin zu ausführbarem Maschinencode ist jedoch nicht möglich. VBA ist vor allem ' +
        'für prozedurale Programmierung konzipiert. Klassen und Objekte können zwar syntaktisch dargestellt und implementiert werden, ' +
        'unterliegen jedoch den auch in Visual Basic Classic bestehenden Einschränkungen (fehlende Implementierungsvererbung); ' +
        'andere Merkmale wie Datenkapselung, Interface-Vererbung und Laufzeitpolymorphie können hingegen verwendet werden. ' +
        'Der Zugriff aus VBA auf das jeweilige Wirtsprogramm (Word, Excel etc.) erfolgt über eine Programmierschnittstelle. ' +
        'In den jeweiligen Anwendungen stehen neben dem VBA-Kern (Kontrollstrukturen, Datentypen, mathematische Funktionen, ' +
        'Dateisystem) spezielle Objekte des Wirtsprogramms zur Verfügung. Diese Objekte ermöglichen es, Abläufe des jeweiligen ' +
        'Wirtsprogramms zu automatisieren. Da diese Schnittstelle über das Component Object Model (COM) realisiert wird, kann eine ' +
        'VBA-Anwendung auch auf andere COM-Komponenten als die vom Wirtsprogramm zur Verfügung gestellten zugreifen',
      imageUrl: '../assets/img/lang-img/10.png',
      imageAlt: 'C# Image'
    },
    {
      id: 11,
      title: 'MATLAB',
      descriptionShort: 'Matlab ist eine kommerzielle Software des US-amerikanischen Unternehmens MathWorks zur ' +
        'Lösung mathematischer Probleme und zur grafischen Darstellung der Ergebnisse',
      designedBy: 'The MathWorks',
      firstAppeared: moment('01-01-1984', 'DD-MM-YYYY').toDate(),
      historyLong:
        'Matlab wurde Ende der 1970er Jahre von Cleve Moler an der Universität New Mexico entwickelt, um den Studenten ' +
        'die Fortran-Bibliotheken LINPACK und EISPACK für lineare Algebra von einer Kommandozeile aus ohne Programmierkenntnisse in ' +
        'Fortran zugänglich zu machen. Zusammen mit Jack Little und Steve Bangert gründete Moler 1984 The MathWorks und machte Matlab ' +
        'zu einem kommerziellen Produkt, das zusammen mit einer ersten Funktionssammlung, der Control System Toolbox, vor allem ' +
        'in der Regelungstechnik viele Anwender fand. Die akademische Bindung ist in der Entwicklung und im Vertrieb von relativ ' +
        'preisgünstigen Studentenversionen bis heute erhalten geblieben und war möglicherweise auch die Grundlage für den Erfolg ' +
        'der Software neben anderen numerischen Plattformen wie MatrixX. Die von Matlab verwendeten Bibliotheken LINPACK und EISPACK ' +
        'wurden im Jahr 2000 durch die ebenfalls in Fortran geschriebenen freien Bibliotheken LAPACK und BLAS ersetzt',
      imageUrl: '../assets/img/lang-img/11.png',
      imageAlt: 'C# Image'
    },
    {
      id: 12,
      title: 'KOTLIN',
      descriptionShort: 'Kotlin ist eine statisch typisierte Programmiersprache, die in Bytecode für die Java Virtual Machine ' +
        '(JVM) übersetzt wird',
      designedBy: 'JetBrains und Open-Source-Entwickler',
      firstAppeared: moment('01-01-2011', 'DD-MM-YYYY').toDate(),
      historyLong:
        'Kotlin ist eine statisch typisierte Programmiersprache, die in Bytecode für die Java Virtual Machine (JVM) ' +
        'übersetzt wird, aber auch in JavaScript-Quellcode transformiert werden kann. Hauptsächlich wird die Sprache von den in ' +
        'Sankt Petersburg ansässigen JetBrains-Programmierern entwickelt.[4][5] Daher stammt auch der Name: Kotlin ist ' +
        'eine Insel vor St. Petersburg.' +
        'Nach einem Jahr Entwicklung stellte JetBrains im Juli 2011 das Projekt „Kotlin“ der Öffentlichkeit als neue Sprache für die ' +
        'JVM vor.[7][8] Im Februar 2012 veröffentlichte JetBrains den Quellcode unter einer Apache-2-Lizenz.[9] ' +
        'Am 15. Februar 2016 wurde die Version 1.0 von Kotlin veröffentlicht. ' +
        'Diese Version wird als erster offizieller Stable-Release ' +
        'betrachtet. Der leitende Entwickler Dmitry Jemerow erklärte, dass die meisten Sprachen nicht die Merkmale zeigten, nach denen ' +
        'sie gesucht hätten, mit Ausnahme von Scala. Diese jedoch habe einen langsamen Compiler.[8] Daher war eines der erklärten Ziele ' +
        'für Kotlin die hohe Kompiliergeschwindigkeit, wie man sie von Java her kenne',
      imageUrl: '../assets/img/lang-img/12.png',
      imageAlt: 'C# Image'
    },
    {
      id: 13,
      title: 'GO',
      descriptionShort: 'o ist eine kompilierbare Programmiersprache, die Nebenläufigkeit unterstützt und über eine automatische ' +
        'Speicherbereinigung verfügt',
      designedBy: 'Robert Griesemer, Rob Pike, Ken Thompson u. a.',
      firstAppeared: moment('01-01-2009', 'DD-MM-YYYY').toDate(),
      historyLong:
        'Go wurde aus Unzufriedenheit über die bestehenden Sprachen zur Softwareentwicklung wie C++ oder Java im Kontext ' +
        'heutiger Computersysteme, insbesondere im Hinblick auf skalierbare Netzwerkdienste, Cluster- und Cloud Computing, entwickelt. ' +
        'Im Vergleich zu C++ hat Go weit weniger Keywords. Eines der Probleme, das Go lösen möchte, ist die Compiler-Ineffizienz in C ' +
        'und C++. Wichtige Ziele bei der Entwicklung waren unter anderem die Unterstützung von Nebenläufigkeit mit nativen ' +
        'Sprachelementen und die Erleichterung der Softwareentwicklung mit großen Entwicklerteams und großen Codebasen. ' +
        'Go besitzt einen eigenen Garbage Collector, erlaubt die Verwendung von Zeigern, verzichtet jedoch auf Zeigerarithmetik. ' +
        'Go ist eine kompilierte Sprache, bei der Wert auf eine hohe Übersetzungsgeschwindigkeit gelegt wurde. Go orientiert sich ' +
        'syntaktisch an der Programmiersprache C mit einigem Einfluss aus der Wirthschen Sprachfamilie (Pascal, Modula und ' +
        'insbesondere Oberon). Die Unterstützung für Nebenläufigkeit wurde nach Vorbild der von Tony Hoare eingeführten Communicating ' +
        'Sequential Processes (CSP) gestaltet und steht in Tradition der Programmiersprachen Newsqueak, Alef und Limbo',
      imageUrl: '../assets/img/lang-img/13.png',
      imageAlt: 'C# Image'
    },
    {
      id: 14,
      title: 'PERL',
      descriptionShort: 'Perl ist eine freie, plattformunabhängige und interpretierte Programmiersprache (Skriptsprache), ' +
        'die mehrere Programmierparadigmen unterstützt',
      designedBy: 'Larry Wall, Perl Porter',
      firstAppeared: moment('01-01-1987', 'DD-MM-YYYY').toDate(),
      historyLong:
        'Larry Wall war als Administrator und Programmierer bei dem Unternehmen Unisys angestellt, wo er seit März 1987 ' +
        'daran beteiligt war, unter dem Namen blacker ein sicheres Netzwerk für die NSA zu entwickeln. Er erhielt mehrere Aufträge, ' +
        'Werkzeuge zur Überwachung und Fernwartung der entstehenden Software zu schaffen. Eine Hauptaufgabe war dabei, übersichtliche ' +
        'Berichte aus verstreuten Logdateien zu erzeugen. Da ihm die vorhandenen Sprachen und Werkzeuge dafür zu umständlich erschienen, ' +
        'entwickelte er mit Hilfe seines damaligen Teamkollegen Daniel Faigin und seines Schwagers Mark Biggar schrittweise eine ' +
        'eigene Sprache, um seine Aufgaben zu lösen. Dabei griff er auch auf sein Wissen und seine Erfahrung als Linguist zurück ' +
        'und entwarf Perl nahe an den menschlichen Sprachgewohnheiten. Dies drückt sich in minimalen Voraussetzungen für Einsteiger, ' +
        'einer starken Kombinierbarkeit der Sprachelemente und einem reichen Wortschatz aus, der auch Befehle zulässt, ' +
        'deren Bedeutungen sich überschneiden. Wall sieht darin die Bedürfnisse eines Praktikers nach Freiheit und intuitivem ' +
        'Ausdruck verwirklicht. Gemäß diesem praktischen Ansatz borgte sich Perl seinen Wortschatz und seine logischen Strukturen von ' +
        'den in den 1980er Jahren unter Unix verbreiteten Sprachen und Werkzeugen, was das Erlernen vereinfachte, aber auch die ' +
        'Unix-Philosophie umkehrte. Unix und seine Systembefehle waren kompiliert und meist in C geschrieben. Diese Befehle waren ' +
        'logische Einheiten und sollten genau eine Aufgabe beherrschen: „Do one thing and do it well“ („Mach genau eine Sache und ' +
        'mach sie gut“). Interpretierte Shell-Skripte kombinierten schnell und einfach die Befehle, die untereinander ihre ' +
        'Ergebnisse durch Pipes weiterreichen konnten. Perl verletzt diese Philosophie, indem es diese Befehle zum Bestandteil ' +
        'der Programmiersprache macht, also C und Shell vereint und die vorhandenen Befehle und Werkzeuge übergeht',
      imageUrl: '../assets/img/lang-img/14.png',
      imageAlt: 'C# Image'
    },
    {
      id: 15,
      title: 'RUST',
      descriptionShort: 'Rust ist eine Multiparadigmen-Systemprogrammiersprache, die von Mozilla Research entwickelt wurde',
      designedBy: 'Graydon Hoare',
      firstAppeared: moment('01-01-2010', 'DD-MM-YYYY').toDate(),
      historyLong:
        'Rust kennt neben den sogenannten Raw-Pointern, die Zeigern in C entsprechen und nur in explizit als unsafe ' +
        'markiertem Code dereferenziert werden dürfen, auch noch Referenzen. Diese zeigen immer auf gültigen Speicher und dürfen niemals ' +
        'den Wert null annehmen. Es werden zwei verschiedene Arten von Referenzen unterschieden: gemeinsame Referenzen ' +
        '(shared references), eingeleitet durch &, und veränderbare Referenzen (mutable references), eingeleitet durch &mut. Der ' +
        'Rust-Compiler garantiert statisch, dass keine Referenz das von ihr referenzierte Objekt „überlebt“, dass das referenzierte ' +
        'Objekt nicht verändert wird, während eine Referenz (egal ob gemeinsam oder veränderbar) existiert, und dass eine ' +
        'veränderbare Referenz – wenn eine solche existiert – stets die einzige Referenz auf ein Objekt ist, sodass Veränderungen ' +
        'am Objekt vorgenommen werden können, ohne dabei Referenzen zum selben Objekt an anderen Stellen im Code oder sogar in ' +
        'anderen Threads ungültig zu machen.\n' +
        'Das Erstellen von Referenzen wird auch als Borrowing (Ausleihen) bezeichnet, und bildet zusammen mit dem Konzept der ' +
        'Ownership (Besitz) die Grundlage für die sichere Speicherverwaltung ohne Garbage Collection. Ownership bedeutet hier, ' +
        'dass jedes Objekt im Speicher im Besitz derjenigen Variable ist, der es bei der Erstellung zugewiesen wird. Am Ende der ' +
        'Lebensdauer dieser Variable wird der Speicher automatisch freigegeben. Für die meisten komplexeren Datentypen verwendet ' +
        'Rust die sogenannte Move-Semantik, sodass bei Zuweisung eines Objektes zu einer anderen Variablen das Objekt „verschoben“ ' +
        'wird, und ein Zugriff auf die alte Variable daraufhin nicht mehr möglich ist. Auch beim Übergeben von Objekten als ' +
        'Wertparameter an Funktionen (call by value) werden solche Objekte in die Funktion „hineingeschoben“ und sind von ' +
        'außen nicht mehr zugreifbar, wenn sie nicht wieder von der Funktion zurückgegeben werden. Primitive Datentypen ' +
        'verwenden keine Move-Semantik, sondern die sonst übliche Copy-Semantik (Zuweisungen erstellen eine Kopie), und bei ' +
        'benutzerdefinierten Datentypen kann mittels des Copy-Traits selbst entschieden werden, ' +
        'ob Move- oder Copy-Semantik verwendet werden soll',
      imageUrl: '../assets/img/lang-img/15.png',
      imageAlt: 'C# Image'
    },
    {
      id: 16,
      title: 'LUA',
      descriptionShort: 'Lua ist eine imperative und erweiterbare Skriptsprache zum Einbinden in Programme, ' +
        'um diese leichter weiterentwickeln und warten zu können',
      designedBy: 'Roberto Ierusalimschy',
      firstAppeared: moment('01-01-1993', 'DD-MM-YYYY').toDate(),
      historyLong:
        'Lua (portugiesisch für Mond) ist eine imperative und erweiterbare Skriptsprache zum Einbinden in Programme, ' +
        'um diese leichter weiterentwickeln und warten zu können. Eine der besonderen Eigenschaften von Lua ist die geringe ' +
        'Größe des kompilierten Skript-Interpreters. Lua-Programme sind meist plattformunabhängig und werden vor der Ausführung ' +
        'in Bytecode übersetzt. Obwohl man mit Lua auch eigenständige Programme schreiben kann, ist sie vorrangig als eingebettete ' +
        'Skriptsprache für andere Programme konzipiert. In dieser Hinsicht ist sie mit Tcl vergleichbar. Vorteile von Lua sind ' +
        'die geringe Größe von 120 kB, die Erweiterbarkeit und die hohe Geschwindigkeit, verglichen mit anderen Skriptsprachen. ' +
        'Der Lua-Interpreter kann über eine C-Bibliothek angesprochen werden, die auch ein API für die Laufzeitumgebung des ' +
        'Interpreters für Aufrufe vom C-Programm aus enthält. Mittels des API können verschiedene Teile des Programmes in C ' +
        'und Lua geschrieben werden, während Variablen und Funktionen in beiden Richtungen erreichbar bleiben (d. h. eine ' +
        'Funktion in Lua kann eine Funktion in C aufrufen und umgekehrt). Es gibt auch einen freien JIT-Compiler namens LuaJIT, ' +
        'der die Revision 5.1 der Sprache unterstützt.[2] Lua ist in ANSI-C implementiert und unterstützt imperative und ' +
        'funktionale Programmierung. Implementiert man jedoch selbst Objekte mittels Metatables, wird auch objektorientierte ' +
        'Programmierung möglich',
      imageUrl: '../assets/img/lang-img/16.png',
      imageAlt: 'C# Image'
    },
    {
      id: 17,
      title: 'JULIA',
      descriptionShort: 'Julia ist eine höhere Programmiersprache, die vor allem für numerisches und ' +
        'wissenschaftliches Rechnen entwickelt wurde',
      designedBy: 'Jeff Bezanson, Stefan Karpinski',
      firstAppeared: moment('01-01-2012', 'DD-MM-YYYY').toDate(),
      historyLong:
        'Julia ist eine höhere Programmiersprache, die vor allem für numerisches und wissenschaftliches Rechnen entwickelt ' +
        'wurde. Sie kann dennoch als eine General Purpose Language verwendet werden, bei gleichzeitiger Wahrung einer hohen ' +
        'Ausführungsgeschwindigkeit.[5][6][7][8][9] Die Syntax erinnert stark an MATLAB, wie auch andere technische Programmiersprachen. ' +
        'Der Compiler wurde in C, C++ sowie Scheme und die Standardbibliothek in Julia selbst geschrieben. Die Entwicklung ' +
        'begann im Jahr 2009, die erste Open-Source-Version hingegen wurde erst im Februar 2012 veröffentlicht. Von der ' +
        'Geschwindigkeit her kann Julia in dem Bereich von C und Fortran eingeordnet werden, wohingegen andere wissenschaftliche ' +
        'Sprachen wie beispielsweise MATLAB, GNU Octave oder R wesentlich langsamer sind. Charakterisiert wird das Design der ' +
        'Sprache durch ein Typsystem, das parametrisierte Typen erlaubt, eine komplett dynamische Programmierumgebung und ' +
        'Multimethoden als zentrales Paradigma. Julia erlaubt paralleles und verteiltes Ausführen von Programmen und den direkten ' +
        'Aufruf von C- und Fortran-Bibliotheken. Julia enthält standardmäßig einen Garbage Collector[10] und effiziente ' +
        'Implementierungen für Operationen mit Gleitkommazahlen und zur linearen Algebra, zur Generierung von Zufallszahlen ' +
        'und zur Verarbeitung regulärer Ausdrücke. Die Entwicklung erfolgte am MIT und Stefan Karpinski, Viral Shah und Jeff ' +
        'Bezanson erhielten dafür den J. H. Wilkinson Prize for Numerical Software für 2019',
      imageUrl: '../assets/img/lang-img/17.png',
      imageAlt: 'C# Image'
    },
    {
      id: 18,
      title: 'DELPHI',
      descriptionShort: 'Object Pascal ist eine Sammelbezeichnung für mehrere teilweise miteinander kompatible ' +
        'Programmiersprachen-Derivate, die Pascal um objektorientierte Programmierung erweitern',
      designedBy: 'Apple, Niklaus Wirth, Anders Hejlsberg',
      firstAppeared: moment('01-01-1986', 'DD-MM-YYYY').toDate(),
      historyLong:
        'Der Funktionsumfang von Object Pascal ist vergleichbar mit dem von C++, wobei sich die Syntax stark unterscheidet. ' +
        'Variablen müssen deklariert und einem Datentyp zugeordnet werden. Es gibt Klassen mit Konstruktoren und Destruktoren, ' +
        'Methoden und Properties. Methoden können virtuell sein. Die Vererbung unterstützt nur eine Basisklasse; Interfaces ' +
        'ermöglichen Mehrfachvererbung. Für die Speicherverwaltung von Objekten ist der Programmierer selbst verantwortlich. ' +
        'Strings sind davon nicht betroffen, da sie als elementarer Datentyp unterstützt werden. Bis Delphi 2005 wurden ' +
        'Objekte grundsätzlich auf dem Heap angelegt. Dies ermöglicht es, in Delphi jedes Objekt als Ergebnis einer Funktion ' +
        'an den Aufrufenden zu übergeben. In anderen Programmiersprachen, wie z. B. C++, können Objekte sowohl im Heap als ' +
        'auch im Stack angelegt werden. Objekte im Stack können nicht als Rückgabewert übergeben werden, da diese beim ' +
        'Verlassen der Funktion zusammen mit dem restlichen Stackframe der Funktion gelöscht werden. Somit wurde hier eine ' +
        'Designentscheidung getroffen, die dem Delphi-Programmierer die Entscheidung zwischen Heap/Stack abnimmt und immer ' +
        'die flexiblere Lösung wählt. Als Nachteil dieser Technik ergibt sich unmittelbar, dass der Programmierer seine ' +
        'erzeugten Objekte selbst aus dem Speicher entfernen muss. Bei Objekten im Stack ist dies nicht notwendig. ' +
        'Seit Delphi 2006 werden auch Records mit Methoden unterstützt, womit sich Stackobjekte ähnlich wie in C++ erstellen lassen',
      imageUrl: '../assets/img/lang-img/18.png',
      imageAlt: 'C# Image'
    },
    {
      id: 19,
      title: 'VB',
      descriptionShort: 'Visual Basic .NET (Abk. VB.NET) ist eine Programmiersprache von Microsoft, die auf dem .NET Framework aufbaut',
      designedBy: 'Microsoft',
      firstAppeared: moment('01-01-2002', 'DD-MM-YYYY').toDate(),
      historyLong:
        'Um die Jahrtausendwende hatte Visual Basic seinen ursprünglichen Vorteil gegenüber anderen Programmiersprachen, ' +
        'einfach eine graphische Oberfläche zu erstellen, eingebüßt. Viele andere Hochsprachen boten nun ebenfalls die Möglichkeiten, ' +
        'einfach Windows-Benutzeroberflächen zu erstellen, zum Beispiel C++ mit den Microsoft Foundation Classes (MFC). Darüber hinaus ' +
        'hatte sich Visual Basic inzwischen zu einem komplexen und eher inhomogenen Produkt entwickelt, dessen Wartung und Verbesserung ' +
        'zunehmend schwieriger wurde. Wohl aus diesen Gründen stoppte Microsoft die Weiterentwicklung dieses Produktes (trotz des ' +
        'kommerziellen Erfolgs und des Protestes vieler VB-Programmierer) und integrierte die Programmiersprache Visual Basic in die ' +
        'hauseigene .NET-Architektur. Dabei wurde die Sprache zu einem hohen Grad verändert, um den Ansprüchen an eine .NET-Sprache ' +
        'zu genügen. Hierdurch wurde die vollständige Objektorientierung, sowie die Übersetzung in die Common Intermediate ' +
        'Language ermöglicht. Für die Entwicklung von Windows-Anwendungen wird Windows Forms benutzt. Hierbei handelt es sich um ein ' +
        'ereignisorientiertes Programmiermodell, bei dem entsprechende Ereignisprozeduren aufgerufen werden, wenn das Betriebssystem ' +
        'eine bestimmte Benutzeraktion, wie z. B. das Betätigen einer Schaltfläche, meldet',
      imageUrl: '../assets/img/lang-img/19.png',
      imageAlt: 'C# Image'
    },
    {
      id: 20,
      title: 'HASKELL',
      descriptionShort: 'Haskell ist eine rein funktionale Programmiersprache, dessen Arbeiten zur mathematischen Logik eine ' +
        'Grundlage funktionaler Programmiersprachen bilden',
      designedBy: 'Simon Peyton Jones, Paul Hudak, Philip Wadler',
      firstAppeared: moment('01-01-1990', 'DD-MM-YYYY').toDate(),
      historyLong:
        'Gegen Ende der 1980er Jahre gab es bereits einige funktionale Programmiersprachen. Um der Wissenschaft eine ' +
        'einheitliche Forschungs- und Entwicklungsbasis bereitzustellen, sollte eine standardisierte und moderne Sprache die funktionale ' +
        'Programmierung vereinheitlichen. Zunächst wollte man dazu Miranda als Ausgangspunkt benutzen; doch deren Entwickler waren daran ' +
        'nicht interessiert. So wurde 1990 Haskell 1.0 veröffentlicht. Die aktuelle Version der Programmiersprache ist Haskell 2010. ' +
        'Die Sprachderivate von Haskell sind zahlreich; dazu zählen Parallel Haskell, ' +
        'Distributed Haskell (ehemals Goffin), Eager Haskell, ' +
        'Eden mit einem neuen Ansatz zum parallelen Programmieren und Bedarfsauswertung, DNA-Haskell und sogar objektorientierte ' +
        'Varianten (Haskell++, O’Haskell, Mondrian). Des Weiteren diente Haskell beim Entwurf neuer Programmiersprachen als Vorlage. ' +
        'So wurde beispielsweise im Falle von Python die Lambda-Notation sowie Listenverarbeitungssyntax übernommen',
      imageUrl: '../assets/img/lang-img/20.png',
      imageAlt: 'C# Image'
    }
  ]);

  constructor() {}

  /**
   * Returns the dataStore Array
   * Will be replaced by real http call to backend from environment property url
   * later...
   */
  returnDataStore(): Observable<Language[]> {
    return this.dataStore;
  }

}
