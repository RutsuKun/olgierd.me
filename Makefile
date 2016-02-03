HTTP_SERVER = node_modules/.bin/http-server
NODE        = node
WATCH       = watch

WFLAGS      = -n 1
PORT        = 8080

OUTDIR      = static/
CONTENT     = $(OUTDIR)index.html $(addprefix $(OUTDIR),$(addsuffix /index.html,projekty haslo))
OUTPUT      = $(CONTENT) $(OUTDIR)css/style.css

all: $(OUTPUT)

$(OUTDIR)css/style.css: $(OUTDIR)css/primary.css $(OUTDIR)css/icons.css
	cat $^ > $@

$(OUTDIR)index.html: content/index.html $(OUTDIR) config.json partials/footer.mustache partials/header.mustache
	$(NODE) tools/compile.js < $< > $@

$(OUTDIR)%/index.html: content/%.html $(OUTDIR) config.json partials/footer.mustache partials/header.mustache
	mkdir -p $(OUTDIR)$(*F)
	$(NODE) tools/compile.js < $< > $@

$(OUTDIR)%/index.html: content/%.md $(OUTDIR) config.json partials/footer.mustache partials/header.mustache
	mkdir -p $(OUTDIR)$(*F)
	$(NODE) tools/compile-markdown.js < $< > $@

$(OUTDIR):
	mkdir -p $(OUTDIR)

server:
	$(HTTP_SERVER) -p $(PORT) $(OUTDIR)

watch:
	$(WATCH) $(WFLAGS) $(MAKE) all

clean:
	rm -rvf $(OUTPUT)

.PHONY: server watch all clean copy
