package ca.polymtl.seodin.repository.search;

import ca.polymtl.seodin.domain.DesignPattern;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the DesignPattern entity.
 */
public interface DesignPatternSearchRepository extends ElasticsearchRepository<DesignPattern, Long> {
}
