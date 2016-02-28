---
title: "Rekurencyjne pobieranie przy pomocy wget"
description: ""
---

Kiedyś chcąc pobrać publiczny folder z&nbsp;serwera łączyliśmy się przez FTP i&nbsp;kopiowaliśmy całą strukturę dowolnym narzędziem. Aby nie było nam zbyt wygodnie, rolę eftepa przejął protokół HTTP &mdash; ten zaś, jak wiemy, nie umożliwia w&nbsp;łatwy i&nbsp;ustandaryzowany sposób pobrać zawartości katalogu. Zostaje nam więc pobierać każdy plik po kolei, albo&hellip; **użyć narzędzia wget**.

Opcja, którą mam tu na myśli to `-r`, czyli *recursive*. Przypuśćmy, że serwer nie daje dostępu do FTP, ale już wejście do katalogu `public` odsłania przed nami jego zawartość (a&nbsp;więc listę plików). Do dzieła!

    wget -r http://strona.pl/public/

Takie polecenie pobierze nam wszystko, do czego odnosi się adres `http://strona.pl/public/`, **w tym pliki spoza tego folderu**. Dodamy zatem opcję `--no-parent`, aby ograniczyć wgetowskie zapędy:

    wget -r --no-parent http://strona.pl/public/

Kolejny problem wiąże się z&nbsp;zapisem niechcianych plików, jak `index.html` czy `robots.txt`. Jednak i&nbsp;na tę bolączkę znajdzie się rozwiązanie &mdash; dodajmy do polecenia parametr `--reject`:

    wget -r --no-parent --reject 'index.html*' http://strona.pl/public/

Jeśli zaś interesują nas wyłącznie konkretne pliki, np. PDF-y, to zamiast tego posłużymy się opcją `--accept`:

    wget -r --no-parent --accept '*.pdf' http://strona.pl/public/

Inne użyteczne opcje to `--no-directories`, która ignoruje strukturę folderów, czy `--domains` ograniczająca adresy, z&nbsp;których chcemy pobierać pliki.

Niekiedy przy serwerach SSL trzeba dopisywać --no-check-certificate z powodu problemów z certyfikatem SSL.

Po więcej ustawień polecam zajrzeć do [manuala wget](http://man.cx/wget).
