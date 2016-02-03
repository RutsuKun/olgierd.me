HTTP_SERVER = node_modules/.bin/http-server
NODE        = node
WATCH       = watch
RM          = rm

WFLAGS      = -n 1
PORT        = 8080

CONTENT     = index.html projekty.html

all: $(CONTENT)

server:
	$(HTTP_SERVER) -p $(PORT)

watch:
	$(WATCH) $(WFLAGS) $(MAKE) all

%.html: content/%.html config.json private/footer.mustache private/header.mustache
	$(NODE) compile.js < $< > $@

clean:
	$(RM) $(CONTENT)

.PHONY: server watch all clean
