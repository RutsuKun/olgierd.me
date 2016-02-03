HTTP_SERVER = node_modules/.bin/http-server
NODE        = node
WATCH       = watch
RM          = rm -rvf

WFLAGS      = -n 1
PORT        = 8080

OUTDIR      = static/
CONTENT     = $(addprefix $(OUTDIR),index.html projekty.html)

all: $(CONTENT)

$(OUTDIR)%.html: content/%.html $(OUTDIR) config.json partials/footer.mustache partials/header.mustache
	$(NODE) compile.js < $< > $@

$(OUTDIR):
	mkdir $(OUTDIR)

server:
	$(HTTP_SERVER) -p $(PORT) $(OUTDIR)

watch:
	$(WATCH) $(WFLAGS) $(MAKE) all

clean:
	$(RM) $(CONTENT)

.PHONY: server watch all clean copy
