package com.example.digitalmunicipality.citizen;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.List;

@RestController
@RequestMapping("/api/citizens")
@CrossOrigin(origins = "*")
public class CitizenController {
    private final CitizenRepository repo;
    public CitizenController(CitizenRepository repo) { this.repo = repo; }

    @GetMapping
    public List<Citizen> list() { return repo.findAll(); }

    @GetMapping("{id}")
    public ResponseEntity<Citizen> get(@PathVariable Long id) {
        return repo.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Citizen create(@RequestBody Citizen c) { return repo.save(c); }

    @PutMapping("{id}")
    public ResponseEntity<Citizen> update(@PathVariable Long id, @RequestBody Citizen c) {
        return repo.findById(id).map(existing -> {
            existing.setName(c.getName());
            existing.setEmail(c.getEmail());
            existing.setAddress(c.getAddress());
            existing.setDob(c.getDob());
            return ResponseEntity.ok(repo.save(existing));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        return repo.findById(id).map(existing -> {
            repo.deleteById(id);
            return ResponseEntity.noContent().<Void>build();
        }).orElse(ResponseEntity.notFound().build());
    }
}
