---
title: "Zmiana hasła użytkownika Windows - Linuksem"
description: ""
---

Jeśli zgubiliśmy hasło do systemu Windows, w&nbsp;odzyskaniu (a&nbsp;właściwie zmianie) go może nam pomóc płyta z&nbsp;Linuksem i&nbsp;programem chntpw. Omówię proces resetowania hasła na przykładzie LiveDVD Ubuntu 14.04 (dowolna inna wersja prawdopodobnie także zadziała). Wypalamy ściągnięte Ubuntu na płytkę i&nbsp;uruchamiamy z&nbsp;niej komputer. Gdy pokaże się pulpit, wybieramy opcję *Try Ubuntu* (*Wypróbuj Ubuntu*).

Otwieramy terminal (`Ctrl+Alt+T`) oraz wpisujemy:

```bash
sudo su
```

aby zalogować się na konto superużytkownika (root). Wydajemy polecenie:

```bash
apt-get install chntpw
```

aby zainstalować narzędzie.

Teraz przyda nam się nazwa partycji z&nbsp;systemem Windows. Wydajemy polecenie:

```bash
ls -l /dev/disk/by-label
```

mój wynik to:

```
lrwxrwxrwx 1 root root 10 11-10 20:39 Arch -> ../../sda1
lrwxrwxrwx 1 root root 10 11-10 20:39 Home -> ../../sda2
lrwxrwxrwx 1 root root 10 11-10 20:39 Windows -> ../../sda3
```

z czego wynika, że nazwa partycji to sda3. Montujemy ją:

```bash
mkdir /media/windows
mount -t ntfs-3g /dev/sda3 /media/windows # podmień sda3
```

Wydajemy polecenie:

```bash
chntpw /media/windows/Windows/System32/config/SAM
```

i postępujemy zgodnie z&nbsp;instrukcjami programu.

### A co w Linuksie?

```bash
sudo su
mkdir /media/linux
mount /dev/sda1 /media/linux
chroot /media/linux
passwd winek
```
